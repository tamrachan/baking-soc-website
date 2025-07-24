const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { Resend } = require('resend');
const port = 5000;

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());

app.get("/feedback", async (req, res) => {
    subject, html_to_send = req.body();

    try {
        const data = await resend.emails.send({
            from: "Website <onboarding@resend.dev>",
            to: ["bakingsoc@st-andrews.ac.uk"],
            subject: "FEEDBACK FORM: " + subject,
            html: "<p>" + html_to_send + "</p>",
        });
        res.status(200).json(data);
    } catch (error) {
        res.status(400).json(error);
    }
});

app.listen(port, () => {
    if (!process.env.RESEND_API_KEY) {
        throw `Abort: You need to define RESEND_API_KEY in the .env file.`;
    }

    console.log("Listening on http://localhost:" + port);
});