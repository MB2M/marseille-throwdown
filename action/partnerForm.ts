"use server";

import nodemailer from "nodemailer";
import { z, ZodIssue } from "zod";
import { actionHandler } from "@/lib/utils";

const partnerFormSchema = z.object({
  firstname: z.string().min(2, "too short"),
  lastname: z.string().min(2, "too short"),
  enterprise: z.string().min(2, "too short"),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .regex(
      /^\+?(\d{1,3})?[-.]?(\d{1,4}[-.]?){1,3}\d{1,4}$/,
      "bad phone number",
    ),
  message: z.string().max(900),
});

export type PartnerFormType = z.infer<typeof partnerFormSchema>;

export type PartnerFormErrorType = z.inferFlattenedErrors<
  typeof partnerFormSchema
>;

export const partnerFormAction = actionHandler(
  async (
    previousState:
      | {
          success: true;
          data:
            | Awaited<
                ReturnType<
                  (previousState: any, formData: FormData) => Promise<void>
                >
              >
            | { data: PartnerFormType; errors: PartnerFormErrorType };
        }
      | { success: false; message: string | ZodIssue[] },
    formData: FormData,
  ) => {
    const partnerData = Object.fromEntries(formData);
    const parseResult = partnerFormSchema.safeParse(partnerData);
    if (!parseResult.success) {
      return {
        data: partnerData as PartnerFormType,
        errors: parseResult.error.formErrors,
      };
    }

    const data = parseResult.data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    const mailData = {
      from: "Marseille Throwdown website",
      to: "aphal.dev@gmail.com",
      subject: `Nouvelle demande partenaire ${
        data.enterprise
      } (${data.email || ""})`,
      text: `Nouveau contact: ${data.enterprise || ""}  (${data.email || ""})`,
      html: `<h4>Nouvelle demande partenaire:</h4>

                        <ul>
                        ${Object.entries(data)
                          .map(([key, value]) => `<li>${key}: ${value}</li>`)
                          .join("")}</ul>`,
    };

    await transporter.sendMail(mailData);
  },
);
