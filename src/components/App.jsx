import { nanoid } from 'nanoid'
import style from 'components/App.module.css';
import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('contacts')) ?? [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
    )
  })

const [filter, setFilter] = useState('');
 
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts]);

  const addContacts = (name, number) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    )
      ? alert(`${name} is already in contact`)
      : setContacts([contact, ...contacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactId))
  };

  const changeFilter = e => setFilter(e.currentTarget.value);
  
  const getVisibleContact = () => {
    const normalizedfilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedfilter)
    );
  };

    return (
      <div>
        <h2 className={style.title}>Phonebook</h2>
        <ContactForm onSubmit={addContacts} />
        <h3 className={style.title}>Contacts</h3>
        <Filter filter={filter} onChange={changeFilter} />
          <ContactList contacts={getVisibleContact}
          onDeleteContact={deleteContact}/>
      </div>
    );
};