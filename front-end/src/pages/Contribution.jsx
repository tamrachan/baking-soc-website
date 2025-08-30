import { useState } from "react";
import "../css/Forms.css"; // We'll use a shared CSS file

function Contribution() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [recipe, setRecipe] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatusMessage('Sending...');

        try {
            const response = await fetch('http://localhost:3001/api/contribution', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, recipe })
            });

            if (response.ok) {
                setStatusMessage('Thank you for your contribution!');
                setName('');
                setEmail('');
                setRecipe('');
            } else {
                setStatusMessage('Something went wrong. Please try again.');
            }
        } catch (error) {
            setStatusMessage('Error: Could not send contribution.');
        }
    };

    return (
        <div id="contribution" className="form-section">
            <div className="form-container">
                <h2>Contribute a Recipe</h2>
                <form className="app-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your Name" id="name" name="name" required />

                    <label htmlFor="email">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@st-andrews.ac.uk" id="email" name="email" required />

                    <label htmlFor="recipe">Your Recipe:</label>
                    <textarea value={recipe} onChange={(e) => setRecipe(e.target.value)} placeholder="Please include ingredients and instructions..." id="recipe" name="recipe" required />
                    
                    <button type="submit">Submit Recipe</button>
                    {statusMessage && <p className="status-message">{statusMessage}</p>}
                </form>
            </div>
        </div>
    );
}

export default Contribution;
