import { redirect } from "next/navigation";

import { stripe } from "@/lib/stripe";
import { cancelCheckout } from "@/action/stripe";

interface Props {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Return({ searchParams }: Props) {
  const { session_id } = await searchParams;

  if (!session_id || typeof session_id !== "string")
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const { status, customer_details } = await stripe.checkout.sessions.retrieve(
    session_id,
    {
      expand: ["line_items", "payment_intent"],
    },
  );

  if (status === "open") {
    await cancelCheckout(session_id);
    return redirect("/");
  }

  if (status === "complete") {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to{" "}
          {customer_details?.email}. If you have any questions, please email{" "}
        </p>
        <a href="mailto:orders@example.com">orders@example.com</a>.
      </section>
    );
  }
}
