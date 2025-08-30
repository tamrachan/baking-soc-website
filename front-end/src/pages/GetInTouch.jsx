import React from 'react';
import '../css/GetInTouch.css';

function GetInTouch() {
  return (
    <div id="get-in-touch" className="get-in-touch-section">
      <div className="container">
        <h2 className="section-title">We'd Love to Hear From You!</h2>
        <p className="section-intro">
          Whether you have feedback on our website, a new recipe to share, or just want to say hello, we welcome your messages.
        </p>
        <div className="contact-options">
          {/* Option 1: Recipe Contributions */}
          <div className="contact-card">
            <h3>Contribute a Recipe</h3>
            <p>
              Have a delicious recipe you think our members would love? Share it with us! Please include the ingredients, step-by-step instructions, and a photo if you have one.
            </p>
            <a href="mailto:bakingsoc@st-andrews.ac.uk?subject=Recipe%20Contribution" className="contact-button">
              Email Your Recipe
            </a>
          </div>

          {/* Option 2: General Feedback */}
          <div className="contact-card">
            <h3>Give Us Feedback</h3>
            <p>
              Your feedback is invaluable in helping us improve. Let us know what you like, what you don't, or any ideas you have for the Baking Society.
            </p>
            <a href="mailto:bakingsoc@st-andrews.ac.uk?subject=Website%20Feedback" className="contact-button">
              Send Feedback
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
