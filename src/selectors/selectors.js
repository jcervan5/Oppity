export const contactsFormattedForDropdown = contacts => {
    if (!contacts) {
        return;
    }

    return contacts.map(contact => {
        return {
            value: contact.id,
            text: `${contact.firstName} ${contact.lastName}`
        };
    });
};
