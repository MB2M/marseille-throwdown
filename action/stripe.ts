"use server";

import { headers } from "next/headers";

import { freeStockSession, stripe } from "@/lib/stripe";

export async function createCheckoutSession(
  productId: string,
  quantity: number,
) {
  const origin = (await headers()).get("origin");

  try {
    // Récupérez le prix associé au produit
    const product = await stripe.products.retrieve(productId);
    const currentStock = parseInt(product.metadata.stock || "0", 10);

    if (currentStock < quantity) {
      throw new Error("Stock insuffisant");
    }

    if (typeof product.default_price !== "string") {
      throw new Error("Bad product: price is not a string.");
    }

    const newStock = currentStock - quantity;
    const reservationId = `reserve_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    await stripe.products.update(productId, {
      metadata: {
        stock: newStock.toString(),
        pending_stock: JSON.stringify([
          ...JSON.parse(product.metadata.pending_stock || "[]"),
          {
            quantity,
            timestamp: Date.now(),
            // Identifiant unique pour cette réservation
            reservationId,
          },
        ]),
      },
    });

    const price = await stripe.prices.retrieve(product.default_price);
    console.log(product.metadata.pending_stock);
    // Créez la Checkout Session
    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      mode: "payment",
      line_items: [
        {
          price: price.id,
          quantity,
        },
      ],
      return_url: `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
      expires_at: Math.floor(Date.now() / 1000) + 30 * 60, // 30 minutes
      metadata: {
        productId,
        quantity,
        reservationId,
      },
    });

    return session.client_secret;
  } catch (error) {
    console.error("Erreur lors de la création de la session:", error);
    throw new Error("Impossible de créer la session de paiement");
  }
}

export async function cancelCheckout(sessionId: string) {
  try {
    // Récupérer les informations de la session
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    // Vérifier si la session n'est pas déjà complétée et n'a pas déjà été traitée
    if (session.status !== "complete") {
      // Vérifier si la session contient un flag "stock_released"
      if (session.metadata && session.metadata.stock_released === "true") {
        return { success: true };
      }

      // Récupérer le produit pour vérifier les réservations
      await freeStockSession(session);
    }

    return { success: true };
  } catch (error: any) {
    console.error("Erreur lors de la libération du stock:", error);
    throw new Error(error.message);
  }
}
