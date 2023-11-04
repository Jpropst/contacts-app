import React from "react"
import "./ContactList.css"
import ContactCard from "../ContactCard/ContactCard"
import { ContactListProps } from "../../../utils/interfaces"


const ContactList: React.FC<ContactListProps> = ({ contacts }) => (
    <div className="contact-list">
        <ul>
            {contacts.map((contact, i) => (
                <li 
                    key={i} 
                    className="contact"
                >
                    <ContactCard 
                    key={i}
                    contacts={contact}
                    />
                </li>
            ))}
        </ul>
    </div>
)

export default ContactList