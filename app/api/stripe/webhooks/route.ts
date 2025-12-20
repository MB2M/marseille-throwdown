import { NextRequest } from "next/server";
import Stripe from "stripe";
import { headers } from "next/headers";
import { freeStockSession } from "@/lib/stripe";

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const sig = (await headers()).get("stripe-signature");
  if (!sig) return Response.json({ success: false });

  let event;

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

  try {
    event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
  } catch (err: any) {
    console.log(err);
    return Response.json(`Webhook Error: ${err.message}`);
  }

  // const event = await request.json();

  console.log(event.type);
  switch (event.type) {
    // Paiement réussi - confirmer la réservation
    case "checkout.session.completed": {
      // La réservation est déjà faite, rien à faire de plus
      // Le stock a déjà été mis à jour lors de la création de la session
      break;
    }
    // Annulation utilisateur ou expiration de la session
    case "checkout.session.expired":
    case "checkout.session.async_payment_failed": {
      const session = event.data
        .object as Stripe.Response<Stripe.Checkout.Session>;

      if (session.metadata && session.metadata.stock_released === "true") {
        break;
      }
      await freeStockSession(session);

      // const { productId, quantity, reservationId } = session.metadata as {
      //   productId: string;
      //   quantity: string;
      //   reservationId: string;
      // };
      //
      // // Restaurer le stock
      // const product = await stripe.products.retrieve(productId);
      // const currentStock = parseInt(product.metadata.stock || "0", 10);
      // const pendingReservations = JSON.parse(
      //   product.metadata.pending_stock || "[]",
      // );
      //
      // // Filtrer pour supprimer cette réservation
      // const updatedReservations = pendingReservations.filter(
      //   (res: { reservationId: string }) => res.reservationId !== reservationId,
      // );
      //
      // // Mettre à jour le stock et les réservations en attente
      // await stripe.products.update(productId, {
      //   metadata: {
      //     stock: (currentStock + parseInt(quantity)).toString(),
      //     pending_stock: JSON.stringify(updatedReservations),
      //   },
      // });
      //
      // await stripe.checkout.sessions.update(session.id, {
      //   metadata: { ...session.metadata, stock_released: "true" },
      // });

      break;
    }
  }

  return Response.json({ success: true });
}
