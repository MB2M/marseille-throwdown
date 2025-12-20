"use client";

import { Title } from "@/components/mt24/title";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useActionState, useEffect, useState } from "react";
import { partnerFormAction, PartnerFormType } from "@/action/partnerForm";
import toast from "react-hot-toast";
import Image from "next/image";

function InputError({
  state,
  label,
}: {
  state: Awaited<ReturnType<typeof partnerFormAction>>;
  label: keyof PartnerFormType;
}) {
  return (
    <div className={"text-xs text-destructive font-bold"}>
      {state.success ? state.data?.errors.fieldErrors[label] : null}
    </div>
  );
}

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(partnerFormAction, {
    success: false,
    message: "",
  });
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    if (pending) setHasChanged(true);
    if (!pending && hasChanged) {
      setHasChanged(false);
      if (state.success) {
        if (!state.data) {
          toast.success(
            "Thank you for your message, we will contact you soon.",
          );
        } else {
          toast.error("Please fill the form correctly");
        }
      } else {
        toast.error("An error append, please try again later");
      }
    }
  }, [hasChanged, pending, state, state.success]);

  return (
    <>
      <div className={"relative"}>
        <div className={"absolute inset-0"}>
          <Image
            src={"/img/mountain.png"}
            alt={"moutain"}
            className={"object-cover object-bottom "}
            fill
          />
        </div>
        <div className={"absolute inset-0 blue-gradient object-cover z-10"} />
        <div
          className={
            "flex flex-col gap-11 relative px-5 lg:px-10 xl:px-20 py-14 lg:py-16 xl:py-20 items-center justify-center z-10"
          }
        >
          <Title className={"gap-5 text-center"}>
            <Title.subTitle>A question ?</Title.subTitle>

            <Title.mainTitle>Become Partner</Title.mainTitle>
            <p>
              You enjoyed the previous Marseille Throwdown editions and want to
              become a partner? Fill the form below.
            </p>
          </Title>
          <form
            className={"flex flex-col gap-11 lg:w-[650px]"}
            action={formAction}
          >
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              <div className="w-full col-span-2 lg:col-span-2">
                <Label>Enterprise*</Label>
                <Input
                  name={"enterprise"}
                  placeholder={"enterprise@example.com"}
                  required
                  type={"text"}
                  defaultValue={
                    (state.success && state.data?.data.enterprise) || undefined
                  }
                  className={`${state.success && state.data?.errors.fieldErrors.enterprise && "border-2 border-red-500"}`}
                />
                <InputError state={state} label={"enterprise"} />
              </div>
              <div className="w-full">
                <Label>Firstname*</Label>
                <Input
                  name={"firstname"}
                  placeholder={"Firstname"}
                  required
                  type={"text"}
                  className={`${state.success && state.data?.errors.fieldErrors.firstname && "border-2 border-red-500"}`}
                  defaultValue={
                    (state.success && state.data?.data.firstname) || undefined
                  }
                />
                <InputError state={state} label={"firstname"} />
              </div>
              <div className="w-full">
                <Label>Lastname*</Label>
                <Input
                  name={"lastname"}
                  placeholder={"Lastname"}
                  required
                  defaultValue={
                    (state.success && state.data?.data.lastname) || undefined
                  }
                  className={`${state.success && state.data?.errors.fieldErrors.lastname && "border-2 border-red-500"}`}
                />
                <InputError state={state} label={"lastname"} />
              </div>
              <div className="w-full col-span-2 lg:col-span-1">
                <Label>Email*</Label>
                <Input
                  name={"email"}
                  placeholder={"rich-froning@crossfit.com"}
                  required
                  type={"email"}
                  defaultValue={
                    (state.success && state.data?.data.email) || undefined
                  }
                  className={`${state.success && state.data?.errors.fieldErrors.email && "border-2 border-red-500"}`}
                />
                <InputError state={state} label={"email"} />
              </div>
              <div className="w-full col-span-2 lg:col-span-1">
                <Label>Phone*</Label>
                <Input
                  name={"phoneNumber"}
                  placeholder={"0612345678"}
                  type={"tel"}
                  defaultValue={
                    (state.success && state.data?.data.phoneNumber) || undefined
                  }
                  className={`${state.success && state.data?.errors.fieldErrors.phoneNumber && "border-2 border-red-500"}`}
                />
                <InputError state={state} label={"phoneNumber"} />
              </div>

              <div className="w-full col-span-2">
                <Label htmlFor={"message"}>Message</Label>
                <Textarea
                  placeholder="Type your message here."
                  id="message"
                  name={"message"}
                  maxLength={900}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                variant={"ghost"}
                className={"bg-foreground text-background w-full lg:w-auto"}
                type={"submit"}
              >
                SEND
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
