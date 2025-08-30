const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001; // We'll run the server on a different port

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// API Endpoint for Recipe Contributions
app.post('/api/contribution', (req, res) => {
    const { name, email, recipe } = req.body;

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Send to your own email
        subject: `New Recipe Contribution from ${name}`,
        html: `
            <h3>New Recipe Contribution</h3>
            <p><strong>From:</strong> ${name} (${email})</p>
            <p><strong>Recipe:</strong></p>
            <pre>${recipe}</pre>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

// API Endpoint for Feedback
app.post('/api/feedback', (req, res) => {
    const { email, feedback } = req.body;

    const mailOptions = {
        from: email || 'anonymous@feedback.com',
        to: process.env.EMAIL_USER,
        subject: 'New Website Feedback',
        html: `
            <h3>New Feedback Received</h3>
            <p><strong>From:</strong> ${email || 'Anonymous'}</p>
            <p><strong>Feedback:</strong></p>
            <p>${feedback}</p>
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
