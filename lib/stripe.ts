import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export const freeStockSession = async (
  session: Stripe.Response<Stripe.Checkout.Session>,
) => {
  const { productId, quantity, reservationId } = session.metadata || {};

  const product = await stripe.products.retrieve(productId);
  const pendingReservations = JSON.parse(
    product.metadata.pending_stock || "[]",
  );

  // Vérifier si la réservation existe toujours
  const reservationExists = pendingReservations.some(
    (res: { reservationId: string }) => res.reservationId === reservationId,
  );

  if (reservationExists) {
    // Filtrer pour supprimer cette réservation
    const updatedReservations = pendingReservations.filter(
      (res: { reservationId: string }) => res.reservationId !== reservationId,
    );

    const currentStock = parseInt(product.metadata.stock || "0", 10);

    // Mettre à jour le stock et les réservations en attente
    await stripe.products.update(productId, {
      metadata: {
        stock: (currentStock + parseInt(quantity)).toString(),
        pending_stock: JSON.stringify(updatedReservations),
      },
    });

    // Marquer la session comme traitée pour éviter les doublons
    await stripe.checkout.sessions.update(session.id, {
      metadata: { ...session.metadata, stock_released: "true" },
    });
  }
};
