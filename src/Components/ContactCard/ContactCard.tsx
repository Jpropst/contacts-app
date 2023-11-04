import React from "react"
import "./ContactCard.css"
import { ContactCardProps } from "../../../utils/interfaces"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';

const ContactCard: React.FC<ContactCardProps> = ({ contacts }) => (
    <div className="contact-card">
        <h3>
            {contacts.firstName} {contacts.lastName}
        </h3>
        <div className="info">
            <p className="phone-number">
                {contacts.phoneNumber}
            </p>
            {contacts.isFavorite && 
                <FontAwesomeIcon
                    className="heart"
                    icon={faHeart} 
            />}<FontAwesomeIcon 
                    className="trash"
                    icon={faTrash} 
                />
        </div>
    </div>
)

export default ContactCard