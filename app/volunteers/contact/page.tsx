"use client";

import { Title } from "@/components/mt24/title";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  volunteerFormAction,
  VolunteerFormTypeIn,
} from "@/action/volunteerForm";
import { useActionState, useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";
import Image from "next/image";

function InputError({
  state,
  label,
}: {
  state: Awaited<ReturnType<typeof volunteerFormAction>>;
  label: keyof VolunteerFormTypeIn;
}) {
  return (
    <div className={"text-xs text-destructive font-bold"}>
      {state.success && state.data && "errors" in state.data
        ? state.data.errors.fieldErrors[label]
        : null}
    </div>
  );
}

export default function ContactPage() {
  const [state, formAction, pending] = useActionState(volunteerFormAction, {
    success: true,
    data: undefined,
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

            <Title.mainTitle>Become Volunteer</Title.mainTitle>
            <p>
              If you want to become a volunteer or for any question, please fill
              the form below
            </p>
          </Title>
          <form
            className={"flex flex-col gap-11 lg:w-[650px]"}
            action={formAction}
          >
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              <div className="w-full">
                <Label>Firstname*</Label>
                <Input
                  name={"firstname"}
                  placeholder={"Rich"}
                  required
                  type={"text"}
                  className={`${state.success && state.data && "errors" in state.data && state.data.errors.fieldErrors.firstname && "border-2 border-red-500"}`}
                  defaultValue={
                    (state.success &&
                      state.data &&
                      "data" in state.data &&
                      (state.data.data.firstname as string)) ||
                    undefined
                  }
                />
                <InputError state={state} label={"firstname"} />
              </div>
              <div className="w-full">
                <Label>Lastname*</Label>
                <Input
                  name={"lastname"}
                  placeholder={"Froning"}
                  required
                  defaultValue={
                    (state.success &&
                      state.data &&
                      "data" in state.data &&
                      (state.data.data.lastname as string)) ||
                    undefined
                  }
                  className={`${state.success && state.data && "errors" in state.data && state.data.errors.fieldErrors.lastname && "border-2 border-red-500"}`}
                />
                <InputError state={state} label={"lastname"} />
              </div>
              <div className="w-full col-span-2 lg:col-span-1">
                <Label>Email*</Label>
                <Input
                  name={"email"}
                  placeholder={"rich.froning@marseille-throwdown.com"}
                  required
                  type={"email"}
                  defaultValue={
                    (state.success &&
                      state.data &&
                      "data" in state.data &&
                      (state.data.data.email as string)) ||
                    undefined
                  }
                  className={`${state.success && state.data && "errors" in state.data && state.data.errors.fieldErrors.email && "border-2 border-red-500"}`}
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
                    (state.success &&
                      state.data &&
                      "data" in state.data &&
                      (state.data.data.phoneNumber as string)) ||
                    undefined
                  }
                  className={`${state.success && state.data && "errors" in state.data && state.data.errors.fieldErrors.phoneNumber && "border-2 border-red-500"}`}
                />
                <InputError state={state} label={"phoneNumber"} />
              </div>
              <div className="w-full col-span-2 lg:col-span-2">
                <Label>Box*</Label>
                <Input
                  name={"box"}
                  placeholder={"Affiliate"}
                  required
                  type={"text"}
                  defaultValue={
                    (state.success &&
                      state.data &&
                      "data" in state.data &&
                      (state.data.data.box as string)) ||
                    undefined
                  }
                  className={`${state.success && state.data && "errors" in state.data && state.data.errors.fieldErrors.box && "border-2 border-red-500"}`}
                />
                <InputError state={state} label={"box"} />
              </div>
              <div className="w-full">
                <Label>Gender*</Label>
                <Select name={"gender"}>
                  <SelectTrigger
                    className={`${state.success && state.data && "errors" in state.data && state.data.errors.fieldErrors.gender && "border-2 border-red-500"}`}
                  >
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Gender</SelectLabel>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <InputError state={state} label={"gender"} />
              </div>

              <div className="w-full">
                <Label>Shirt Size</Label>
                <Select name={"shirtSize"}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Shirt Size</SelectLabel>
                      <SelectItem value="XS">XS</SelectItem>
                      <SelectItem value="S">S</SelectItem>
                      <SelectItem value="M">M</SelectItem>
                      <SelectItem value="L">L</SelectItem>
                      <SelectItem value="XL">XL</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <InputError state={state} label={"shirtSize"} />
              </div>
              <div className="w-full col-span-2">
                <Label>Availability*</Label>
                <div className="flex flex-row gap-6 mt-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="friday" name="friday" />
                    <label
                      htmlFor="friday"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Friday
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="saturday" name="saturday" />
                    <label
                      htmlFor="saturday"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Saturday
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sunday" name="sunday" />
                    <label
                      htmlFor="sunday"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Sunday
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-full col-span-2">
                <Label htmlFor={"experience"} className={"mb-2"}>
                  Tell us about your volunteer experience (in and outside
                  fitness competitions)
                </Label>
                <Textarea
                  placeholder="Type your message here."
                  id="experience"
                  name={"experience"}
                  maxLength={900}
                />
              </div>
              <div className="w-full col-span-2">
                <Label htmlFor={"message"}>Additional information</Label>
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
