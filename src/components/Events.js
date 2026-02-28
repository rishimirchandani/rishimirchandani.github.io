import React from 'react';
import data from '../data.json'

class Events extends React.Component {
    isPastEvent(event) {
        const months = {'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
                       'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11};
        
        // Parse the date string (e.g., "3–7 Nov", "20 Nov")
        const dateMatch = event.date.match(/(\d+)(?:–\d+)?\s+(\w+)/);
        if (!dateMatch) return false;
        
        const day = parseInt(dateMatch[1]);
        const monthName = dateMatch[2];
        const month = months[monthName];
        const year = parseInt(event.year);
        
        const eventDate = new Date(year, month, day);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        return eventDate < today;
    }

    parseDate(event) {
        // Parse date like "3–7 Nov" or "20 Nov"
        const dateMatch = event.date.match(/(\d+)(?:–\d+)?\s+(\w+)/);
        if (!dateMatch) return { day: '', month: '' };
        
        const day = dateMatch[1];
        const month = dateMatch[2].toUpperCase();
        return { day, month };
    }

    formatTime(timeStr) {
        // Convert "8:40am" to "8:40 AM" or "5pm" to "5:00 PM"
        const timeMatch = timeStr.match(/(\d+):?(\d+)?(am|pm)/i);
        if (!timeMatch) return timeStr;
        
        let hours = parseInt(timeMatch[1]);
        const minutes = timeMatch[2] || '00';
        const period = timeMatch[3].toUpperCase();
        
        return `${hours}:${minutes} ${period}`;
    }

    getEventDate(event) {
        const months = {'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
                       'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11};
        
        // Parse the date string (e.g., "3–7 Nov", "20 Nov")
        const dateMatch = event.date.match(/(\d+)(?:–\d+)?\s+(\w+)/);
        if (!dateMatch) return new Date(0); // Invalid date, sort to end
        
        const day = parseInt(dateMatch[1]);
        const monthName = dateMatch[2];
        const month = months[monthName];
        const year = parseInt(event.year);
        
        return new Date(year, month, day);
    }

    render() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Separate and sort events
        const upcomingEvents = [];
        const pastEvents = [];

        data.events.concerts.forEach((event) => {
            const eventDate = this.getEventDate(event);
            if (eventDate >= today) {
                upcomingEvents.push(event);
            } else {
                pastEvents.push(event);
            }
        });

        // Sort both arrays in ascending order
        upcomingEvents.sort((a, b) => this.getEventDate(a) - this.getEventDate(b));
        pastEvents.sort((a, b) => this.getEventDate(a) - this.getEventDate(b));

        const renderEvent = (event, index) => {
            const { day, month } = this.parseDate(event);
            const formattedTime = this.formatTime(event.time);
            const isPast = this.isPastEvent(event);
            
            return (
                <div key={index} className={`event-card ${isPast ? 'past-event' : ''}`}>
                    <div className="date-box">
                        <div className="date-month">{month}</div>
                        <div className="date-day">{day}</div>
                        <div className="date-time">{formattedTime}</div>
                    </div>
                    <div className="event-details">
                        <h3 className="event-title">{event.title} at {event.venue}</h3>
                        <div className="event-meta">
                            <div className="event-location">{event.city}</div>
                            {(event.tickets || event.info) && (
                                <div className="event-links">
                                    {event.tickets && (
                                        <a href={event.tickets} target="_blank" rel="noopener noreferrer" className="event-link">VIEW EVENT →</a>
                                    )}
                                    {event.info && (
                                        <a href={event.info} target="_blank" rel="noopener noreferrer" className="event-link">VIEW EVENT →</a>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            );
        };

        return (
            <div className="Section Events">
                {/* <h2>Events 2025-26</h2> */}
                <div className="events-container">
                    {pastEvents.map((event, index) => renderEvent(event, `past-${index}`))}
                    {upcomingEvents.map((event, index) => renderEvent(event, `upcoming-${index}`))}
                    {/* {pastEvents.length > 0 && upcomingEvents.length > 0 && (
                        <div className="events-separator"></div>
                    )} */}
                </div>
            </div>
        )
    }
}

export default Events;