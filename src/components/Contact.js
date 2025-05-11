import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div className="Section Contact">
                <h2 id="contact">Contact</h2>
                <p>For booking or private lesson inquiries, please email <a href="mailto:hello@rishimirchandani.com">hello@rishimirchandani.com</a> or use the form below.</p>
                <form action="" method="POST">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="Email" placeholder="Email" />
                    <textarea name="message" placeholder="Message"></textarea>
                    <input type="submit" id="submit" value="Send message" />
                </form>
            </div>
        )
    }
}

export default Contact;