"use server";

import nodemailer from "nodemailer";
import { z, ZodIssue } from "zod";
import { actionHandler } from "@/lib/utils";

const volunteerFormSchema = z.object({
  firstname: z.string().min(2, "too short"),
  lastname: z.string().min(2, "too short"),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .regex(
      /^\+?(\d{1,3})?[-.]?(\d{1,4}[-.]?){1,3}\d{1,4}$/,
      "bad phone number",
    ),
  gender: z.string().min(1, "select an option"),
  shirtSize: z.string(),
  message: z.string().max(900),
});

export type VolunteerFormType = z.infer<typeof volunteerFormSchema>;

export type VolunteerFormErrorType = z.inferFlattenedErrors<
  typeof volunteerFormSchema
>;

export const volunteerFormAction = actionHandler(
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
            | { data: VolunteerFormType; errors: VolunteerFormErrorType };
        }
      | { success: false; message: string | ZodIssue[] },
    formData: FormData,
  ) => {
    const volunteerData = Object.fromEntries(formData);
    const parseResult = volunteerFormSchema.safeParse(volunteerData);
    if (!parseResult.success) {
      return {
        data: volunteerData as VolunteerFormType,
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
      to: " aphal.dev@gmail.com",
      subject: `Nouvelle inscription volontaire ${
        data.firstname || ""
      } ${data.lastname || ""} (${data.email || ""})`,
      text: `Nouveau volontaire: ${data.firstname || ""} ${
        data.lastname || ""
      } (${data.email || ""})`,
      html: `<h4>Nouvelle inscription volontaire:</h4>

                        <ul>
                        ${Object.entries(data)
                          .map(([key, value]) => `<li>${key}: ${value}</li>`)
                          .join("")}</ul>`,
    };

    await transporter.sendMail(mailData);
  },
);
