"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import { actionHandler } from "@/lib/utils";

const volunteerFormSchema = z
  .object({
    firstname: z.string().min(2, "too short"),
    lastname: z.string().min(2, "too short"),
    email: z.string().email(),
    phoneNumber: z
      .string()
      .regex(
        /^\+?(\d{1,3})?[-.]?(\d{1,4}[-.]?){1,3}\d{1,4}$/,
        "bad phone number",
      ),
    box: z.string().min(2, "too short"),
    gender: z.string().min(1, "select an option"),
    shirtSize: z.string(),
    message: z.string().max(900),
    friday: z.string().optional(),
    saturday: z.string().optional(),
    sunday: z.string().optional(),
    experience: z.string(),
  })
  .transform((data) => {
    const availableDays: string[] = [];
    if (data.friday === "on") availableDays.push("friday");
    if (data.saturday === "on") availableDays.push("saturday");
    if (data.sunday === "on") availableDays.push("sunday");
    return {
      ...data,
      availableDays,
    };
  });

export type VolunteerFormTypeIn = z.input<typeof volunteerFormSchema>;
export type VolunteerFormType = z.infer<typeof volunteerFormSchema>;

export type VolunteerFormErrorType = z.inferFlattenedErrors<
  typeof volunteerFormSchema
>;

export const volunteerFormAction = actionHandler(
  async (previousState: any, formData: FormData) => {
    const volunteerData = Object.fromEntries(formData);
    const parseResult = volunteerFormSchema.safeParse(volunteerData);
    if (!parseResult.success) {
      return {
        data: volunteerData as unknown as VolunteerFormTypeIn,
        errors: parseResult.error.flatten(),
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
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              background-color: #f4f4f4;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: bold;
            }
            .content {
              padding: 30px;
            }
            .info-section {
              background-color: #f8f9fa;
              border-left: 4px solid #667eea;
              padding: 15px;
              margin: 20px 0;
              border-radius: 4px;
            }
            .info-row {
              display: flex;
              padding: 10px 0;
              border-bottom: 1px solid #e9ecef;
            }
            .info-row:last-child {
              border-bottom: none;
            }
            .info-label {
              font-weight: bold;
              color: #667eea;
              min-width: 150px;
              text-transform: capitalize;
            }
            .info-value {
              color: #495057;
              flex: 1;
            }
            .footer {
              background-color: #f8f9fa;
              padding: 20px;
              text-align: center;
              color: #6c757d;
              font-size: 12px;
            }
            .badge {
              display: inline-block;
              padding: 5px 10px;
              background-color: #667eea;
              color: white;
              border-radius: 12px;
              font-size: 12px;
              margin: 2px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🙋 Nouvelle Inscription Volontaire</h1>
            </div>
            <div class="content">
              <div class="info-section">
                <h2 style="color: #667eea; margin-top: 0;">📋 Informations du volontaire</h2>
                <div class="info-row">
                  <div class="info-label">Prénom:</div>
                  <div class="info-value">${data.firstname || ""}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Nom:</div>
                  <div class="info-value">${data.lastname || ""}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Email:</div>
                  <div class="info-value"><a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">${data.email || ""}</a></div>
                </div>
                <div class="info-row">
                  <div class="info-label">Téléphone:</div>
                  <div class="info-value">${data.phoneNumber || ""}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Box:</div>
                  <div class="info-value">${data.box || ""}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Genre:</div>
                  <div class="info-value">${data.gender || ""}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Taille T-shirt:</div>
                  <div class="info-value">${data.shirtSize || ""}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Expérience:</div>
                  <div class="info-value">${data.experience || ""}</div>
                </div>
              </div>
              
              <div class="info-section">
                <h2 style="color: #667eea; margin-top: 0;">📅 Disponibilités</h2>
                <div>
                  ${data.availableDays
                    .map(
                      (day: string) =>
                        `<span class="badge">${day === "friday" ? "Vendredi" : day === "saturday" ? "Samedi" : "Dimanche"}</span>`,
                    )
                    .join("")}
                </div>
              </div>
              
              ${
                data.message
                  ? `<div class="info-section">
                <h2 style="color: #667eea; margin-top: 0;">💬 Message</h2>
                <p style="margin: 0; white-space: pre-wrap;">${data.message}</p>
              </div>`
                  : ""
              }
            </div>
            <div class="footer">
              <p>Marseille Throwdown - Système de gestion des volontaires</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailData);
  },
);
