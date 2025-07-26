import "../css/Events.css";

function Events() {

    return (
        <div className="events">
            <h1>Events</h1>
            
            <p>View upcoming events:</p>
            <div className="events-grid">
                <div className="events-card">
                    <h3>EVENT TITLE</h3>
                    <h4>Date: </h4>
                    <h4>Time: </h4>
                    <h4>Cost: </h4>
                    <p className="events-desc">Event description...</p>
                </div>
            </div>
        </div>
    )
}

export default Events;