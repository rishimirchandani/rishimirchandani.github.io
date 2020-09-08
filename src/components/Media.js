import React from 'react';
import data from '../data/data.json'

class Media extends React.Component {
    render() {
        return (
            <div className="Section Media">
                <h2 id="media">Media</h2>
                <div class="container">
                {data.media.clips.map( (clip) => {
                    if (clip.type === "youtube") {
                        return (
                            <div>
                                <h3>{clip.heading}</h3>
                                <p>{clip.subheading}</p>
                                <iframe class="Video" src={`https://www.youtube.com/embed/${clip.id}?modestbranding=1&rel=0`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0" allowfullscreen></iframe>
                            </div>
                        );
                    }
                    else if (clip.type === "spotify-playlist") {
                        return (
                            <div>
                                <h3>{clip.heading}</h3>
                                <p>{clip.subheading}</p>
                                <iframe class="Spotify" src={`https://open.spotify.com/embed/playlist/${clip.id}`} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>
                        )
                    }
                    else if (clip.type === "mp3") {
                        return (
                            <div>
                                <h3>{clip.heading}</h3>
                                <p>{clip.subheading}</p>
                                <iframe class="MP3" src={clip.id} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                            </div>
                        )
                    }
})}
                </div>
            </div>
        )
    }
}

export default Media;