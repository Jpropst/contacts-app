import React from "react"
import "./Header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Header: React.FC = () => (
    <header className="header">
        <FontAwesomeIcon
            className="menu-icon"
            icon={faBars}
        />
        <h1>
            Contacts
        </h1>
    </header>
)

export default Header