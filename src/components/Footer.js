import React from 'react';

const YOUTUBE_URL = "https://www.youtube.com/@rishipianist";
const INSTAGRAM_URL = "https://www.instagram.com/rishipianist/";

function YouTubeIcon(props) {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false" {...props}>
            <path
                fill="currentColor"
                d="M23.498 6.186a2.999 2.999 0 0 0-2.112-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.386.566A2.999 2.999 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.999 2.999 0 0 0 2.112 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.386-.566a2.999 2.999 0 0 0 2.112-2.12C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
            />
        </svg>
    );
}

function InstagramIcon(props) {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false" {...props}>
            <path
                fill="currentColor"
                d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm5.25-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"
            />
        </svg>
    );
}

class Footer extends React.Component {
    render() {
        return (
            <div className="Section Footer">
                <div className="Footer-social">
                    <a className="Footer-iconLink" href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                        <YouTubeIcon className="Footer-icon" />
                    </a>
                    <a className="Footer-iconLink" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <InstagramIcon className="Footer-icon" />
                    </a>
                </div>
                <p>&#169; 2026 Rishi Mirchandani </p>
            </div>
        )
    }
}

export default Footer;