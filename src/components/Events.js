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

    render() {
        return (
            <div className="Section Events">
                <h2 id="concerts">Events 2025-26</h2>
                <div className="container">
                    <table className="events-table">
                        <tbody>
                        {data.events.concerts.map((event, index) => (
                            <tr key={index} className={this.isPastEvent(event) ? 'past-event' : ''}>
                            <td>{event.date}</td>
                            <td>{event.time}</td>
                            <td>
                                {event.title} at {event.venue}
                                {event.tickets && (
                                    <span> <a href={event.tickets} target="_blank" rel="noopener noreferrer">[tickets]</a></span>
                                )}
                                {event.info && (
                                    <span> <a href={event.info} target="_blank" rel="noopener noreferrer">[info]</a></span>
                                )}
                            </td>
                            <td>{event.city}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Events;