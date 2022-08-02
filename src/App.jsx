import { useState } from 'react';
import { useLocalStorage } from './hooks';
import { nanoid } from 'nanoid';
import defaultContacts from './data/defaultContacts.json';
import { Container } from './components/Container';
import { ContactForm } from './components/ContactForm';
import { ContactList } from './components/ContactsList';
import { Filter } from './components/Filter';

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contact', defaultContacts);
  const [filter, setFilter] = useState('');

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.find(contact => contact.name === newContact.name)
      ? alert(`${name} is already in contacts. `)
      : setContacts([newContact, ...contacts]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normolizeFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizeFilter)
    );
  };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};
