import { useState } from "react";
import "../css/Forms.css"; // Shared CSS

function Feedback() {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMessage('Sending...');

        try {
            const response = await fetch('http://localhost:3001/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, feedback })
            });

            if (response.ok) {
                setStatusMessage('Thank you for your feedback!');
                setEmail('');
                setFeedback('');
            } else {
                setStatusMessage('Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatusMessage('Error: Could not send feedback.');
        }
    };

    return (
        <div id="feedback" className="form-section">
            <div className="form-container">
                <h2>Give Us Feedback</h2>
                <form className="app-form" onSubmit={handleSubmit}>
                    <label htmlFor="feedback-email">Email (Optional):</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" id="feedback-email" name="email" />

                    <label htmlFor="feedback-text">Feedback:</label>
                    <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} placeholder="Let us know what you think..." id="feedback-text" name="feedback" required />
                    
                    <button type="submit">Submit Feedback</button>
                    {statusMessage && <p className="status-message">{statusMessage}</p>}
                </form>
            </div>
        </div>
    );
}

export default Feedback;
