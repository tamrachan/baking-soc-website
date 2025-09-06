import React from 'react';
import { upcomingEvents } from '../constants/events'; // Import the data
import "../css/Events.css";

function Events() {
    return (
        <div id="events" className="events-section">
            <h2 className="events-title">Upcoming Events</h2>
            <p className="events-subtitle">Join us for some baking fun! Here's what we have planned.</p>
            
            <div className="events-grid">
                {upcomingEvents.map((event) => (
                    <div key={event.id} className="event-card">
                        <div className="event-card-header">
                            <h3>{event.title}</h3>
                        </div>
                        <div className="event-card-body">
                            <p><strong>Date:</strong> {event.date}</p>
                            <p><strong>Time:</strong> {event.time}</p>
                            <p><strong>Location:</strong> {event.location}</p>
                            <p><strong>Cost:</strong> {event.cost}</p>
                            <p className="event-desc">{event.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;
