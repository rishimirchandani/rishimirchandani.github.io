import React from 'react';
import data from '../data.json'

class Events extends React.Component {
    render() {
        return (
            <div className="Section Events">
                <h2 id="concerts">Upcoming Concerts</h2>
                <div className="container">
                    <table className="events-table">
                        <tbody>
                        {data.events.concerts.map((event, index) => (
                            <tr key={index}>
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