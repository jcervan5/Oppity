import delay from './delay';

const contacts = [
  {
    id: '',
    firstName: 'Justin',
    lastName: 'Murry'
  },
  {
    id: '',
    firstName: 'Bill',
    lastName: 'Thompson'
  },
  {
    id: '',
    firstName: 'Tony',
    lastName: 'Kershaw'
  }
];


const generateId = (contact) => {
  return contact.firstName.toLowerCase() + '-' + contact.lastName.toLowerCase();
};

class ContactApi {
  static getAllContacts() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], contacts));
      }, delay);
    });
  }

  static saveContact(contact) {
	contact = Object.assign({}, contact);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const minContactNameLength = 3;
        if (contact.firstName.length < minContactNameLength) {
          reject(`First Name must be at least ${minContactNameLength} characters.`);
        }

        if (contact.lastName.length < minContactNameLength) {
          reject(`Last Name must be at least ${minContactNameLength} characters.`);
        }

        if (contact.id) {
          const existingContactIndex = contacts.findIndex(a => a.id === contact.id);
          contacts.splice(existingContactIndex, 1, contact);
        } else {
          contact.id = generateId(contact);
          contacts.push(contact);
        }

        resolve(contact);
      }, delay);
    });
  }

  static deleteContact(contactId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const indexOfContactToDelete = contacts.findIndex(contact => contact.id === contactId);
        contacts.splice(indexOfContactToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ContactApi;
