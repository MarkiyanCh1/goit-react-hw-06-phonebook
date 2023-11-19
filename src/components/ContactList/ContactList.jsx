import React from 'react';
import { List, ContactItem } from './ContactList.styles';
import ContactCard from '../ContactCard/ContactCard';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contactsSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const showContacts = () => {
    return contacts.filter(item => {
      if (filter.trim() === '') {
        return contacts;
      }
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  const allContacts = showContacts();

  return (
    <List>
      {allContacts.map(item => (
        <ContactItem key={item.id}>
          <ContactCard contact={item} />
        </ContactItem>
      ))}
    </List>
  );
};

export default ContactList;
