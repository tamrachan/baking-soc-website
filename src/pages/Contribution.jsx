import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../css/Forms.css";

function Contribution() {
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatusMessage('Sending...');

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID_CONTRIBUTION,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            setStatusMessage('Thank you for your contribution!');
            form.current.reset(); // Clear the form after successful submission
        }, (error) => {
            setStatusMessage('Something went wrong. Please try again.');
        });
    };

    return (
        <div id="contribution" className="form-section">
            <div className="form-container">
                <h2>Contribute a Recipe</h2>
                {/* Add the ref to your form */}
                <form ref={form} className="app-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    {/* The 'name' attribute must match your template variable */}
                    <input type="text" name="user_name" placeholder="Your Name" id="name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" name="user_email" placeholder="youremail@st-andrews.ac.uk" id="email" required />

                    <label htmlFor="recipe">Your Recipe:</label>
                    <textarea name="message" placeholder="Please include ingredients and instructions..." id="recipe" required />
                    
                    <button type="submit">Submit Recipe</button>
                    {statusMessage && <p className="status-message">{statusMessage}</p>}
                </form>
            </div>
        </div>
    );
}

export default Contribution;
