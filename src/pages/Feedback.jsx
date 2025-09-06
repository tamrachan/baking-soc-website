import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "../css/Forms.css";

function Feedback() {
    const form = useRef();
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatusMessage('Sending...');

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID_FEEDBACK,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            setStatusMessage('Thank you for your feedback!');
            form.current.reset();
        }, (error) => {
            setStatusMessage('Something went wrong. Please try again.');
        });
    };

    return (
        <div id="feedback" className="form-section">
            <div className="form-container">
                <h2>Give Us Feedback</h2>
                <form ref={form} className="app-form" onSubmit={handleSubmit}>
                    <label htmlFor="feedback-email">Email (Optional):</label>
                    <input type="email" name="user_email" placeholder="Your email" id="feedback-email" />

                    <label htmlFor="feedback-text">Feedback:</label>
                    <textarea name="message" placeholder="Let us know what you think..." id="feedback-text" required />
                    
                    <button type="submit">Submit Feedback</button>
                    {statusMessage && <p className="status-message">{statusMessage}</p>}
                </form>
            </div>
        </div>
    );
}

export default Feedback;
