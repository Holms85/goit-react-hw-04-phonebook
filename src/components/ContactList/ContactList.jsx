import React from 'react';
// import style from './ContactList.module.css';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {
        contacts.map(({ name, number, id }) => (
          <ContactItem
            key={id}
            name={name}
            id={id}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        ))}
    </ul>
  )
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired
};

export default ContactList;