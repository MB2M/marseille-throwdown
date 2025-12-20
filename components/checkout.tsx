"use client";

import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { cancelCheckout, createCheckoutSession } from "@/action/stripe";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string,
);

interface Props {
  productId: string;
}

export default function Checkout({ productId }: Props) {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [openStripeModal, setOpenStripeModal] = useState(false);

  const handleCheckout = async () => {
    try {
      const secret = await createCheckoutSession(productId, 1);
      setClientSecret(secret);
    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  useEffect(() => {
    if (clientSecret) {
      const sessionId = clientSecret.split("_secret_")[0];
      setOpenStripeModal(true);
    } else {
      setOpenStripeModal(false);
    }
  }, [clientSecret]);

  return (
    <>
      <Dialog
        open={openStripeModal}
        onOpenChange={async () => {
          if (clientSecret) {
            console.log(clientSecret);
            const sessionId = clientSecret.split("_secret_")[0];
            await cancelCheckout(sessionId);
          }
          setOpenStripeModal(false);
        }}
      >
        <DialogTitle />
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent className=" ">
          <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={{ clientSecret }}
          >
            <EmbeddedCheckout />
          </EmbeddedCheckoutProvider>
        </DialogContent>
      </Dialog>
      <div>
        <button onClick={handleCheckout}>Payer maintenant</button>
      </div>
    </>
  );
}
