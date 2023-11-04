import React, { useState } from "react"
import "./Home.css"
import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import { Contact } from "../../../utils/interfaces"

const Home: React.FC = () => {
    // const [contactList, setContactList] = useState<Contact[]>([
        const [contactList] = useState<Contact[]>([
        { firstName: "Joshua", lastName: "Propst", phoneNumber: 2485551322, isFavorite: true },
        { firstName: "Spike", lastName: "Spiegal", phoneNumber: 3135550508, isFavorite: true },
        { firstName: "Ed", lastName: "Wong", phoneNumber: 3685550113, isFavorite: false }
    ])

    return (
        <div className="home">
            <ContactForm/>
            <ContactList contacts={contactList}/>
        </div>
    )
}

export default Home