export interface Contact {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    isFavorite: boolean;
}

export interface ContactCardProps {
    contacts: Contact;
}

export interface ContactListProps {
    contacts: Contact[];
}