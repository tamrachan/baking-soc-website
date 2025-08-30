import { useState } from "react";
import "../css/Feedback.css";

function Contribution() {
    const [email, setEmail] = useState('');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
        console.log('Feedback:', pass);
    }

    return (
        <div className="feedback">
            <div className="form-container">
                <h2>Contribute a recipe form</h2>
                <form className="feedback-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@st-andrews.ac.uk" id="email" name="email" />
                    <br></br>
                    <label htmlFor="name">Name:</label>
                    <input value={name} onChange={(e) => setEmail(e.target.value)} type="name" placeholder="anonymous or your name" id="name" name="name" />
                    <br></br>
                    <label htmlFor="feedback">Recipe contribution:</label>
                    <input value={feedback} onChange={(e) => setFeedback(e.target.value)} type="text" placeholder="Type your recipe here..." id="contribution" name="contribution" />
                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contribution;