import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method !== "POST") {
        res.status(501).send(`Method ${req.method} is not available`);
        return;
    }

    const volontaire = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
        const mailData = {
            from: "Ennea Exos",
            to: "mt23volunteers@gmail.com; aphal.dev@gmail.com",
            subject: `Nouvelle inscription volontaire ${
                volontaire.Prénom || ""
            } ${volontaire.Nom || ""} (${volontaire.Email || ""})`,
            text: `Nouveau volontaire: ${volontaire.PréNom || ""} ${
                volontaire.Nom || ""
            } (${volontaire.Email || ""})`,
            html: `<h4>Nouvelle inscription volontaire:</h4>

                        <ul>
                        ${Object.entries(volontaire)
                            .map(([key, value]) => `<li>${key}: ${value}</li>`)
                            .join("")}</ul>`,
        };

        try {
            await transporter.sendMail(mailData);
            res.status(200).send("email envoyé");
        } catch (err) {
            throw new Error("Bad email");
        }
    } catch (error: any) {
        console.error("Error:", error.message);
        res.status(500).json({
            type: "Error",
            error: error.message,
        });
    }
}
