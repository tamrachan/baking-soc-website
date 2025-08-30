import { useState } from "react";
import "../css/Feedback.css"

function Feedback() {
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
      <h2>Feedback form</h2>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <div className="form-group">
            <label htmlFor="email">Email (optional):</label>
            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="anonymous or youremail@gmail.com"
            id="email"
            name="email"
            />
        </div>

        <div className="form-group">
            <label htmlFor="feedback">Feedback:</label>
            <input
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            type="text"
            placeholder="Type your feedback here..."
            id="feedback"
            name="feedback"
            />
        </div>

        <button type="submit">Submit</button>
    </form>
    </div>
  </div>
)

}

export default Feedback;