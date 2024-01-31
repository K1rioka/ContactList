// components/ContactForm.js
import React, { useState } from 'react';
import { addContact } from '../actions/ContactActions';

const ContactForm = () => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(contact);
        setContact({
            name: '',
            email: '',
        });
    };

    return (
        <div>
            <h2>Add Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={contact.name} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="text" name="email" value={contact.email} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Add Contact</button>
            </form>
        </div>
    );
};

export default ContactForm;
