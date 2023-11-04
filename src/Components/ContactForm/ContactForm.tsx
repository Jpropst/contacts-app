import React, { useState } from "react"
import "./ContactForm.css"

const ContactForm: React.FC = () => {
    const [activeCheckBox, setActiveCheckBox] = useState(false)

    return (
    <form>
        <div className="contact-form">
            <div className="inputs">
                <div className="first-name">
                    <label>
                        First Name: 
                        <input type="text" />
                    </label>
                </div>
                <div className="last-name">
                    <label>
                        Last Name: 
                        <input type="text" />
                    </label>
                </div>
                <div className="phone-number">
                    <label>
                        Phone Number: 
                        <input type="number" />
                    </label>
                </div>
            </div>
            <div className="tools">
                <label className="set-favorite">
                    Set as Favorites?
                    <input
                        className="check-box"
                        type="checkbox"
                        checked={activeCheckBox}
                        onChange={e => setActiveCheckBox(e.target.checked)}
                    />
                </label>
                <button type="submit">
                    Add Contact
                </button>
            </div>
        </div>
    </form>
)}

export default ContactForm