// components/ContactList.js
import React, { useEffect, useState } from 'react';
import ContactStore from '../stores/ContactStore';
import { fetchContacts } from '../actions/ContactActions';

const ContactList = () => {
    const [contacts, setContacts] = useState(ContactStore.getContacts());

    const handleChange = () => {
        setContacts(ContactStore.getContacts());
    };

    useEffect(() => {
        ContactStore.addChangeListener(handleChange);
        fetchContacts(); // Загрузить контакты при монтировании компонента

        return () => {
            ContactStore.removeChangeListener(handleChange);
        };
    }, []);

    return (
        <div>
            <h2>Contact List</h2>
            <ul>
                {contacts.map((contact) => (
                    <li key={contact.id}>
                        {contact.name} - {contact.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
