import PropTypes from 'prop-types';
import style from './ContactItem.module.css';
// import ContactList from 'components/ContactList/ContactList';

function ContactItem({ id, name, number, onDeleteContact }) {
  return (
      <li key={id} className={style.item}>
        {name} : <span className={style.item}>{number}</span>
        <button
          type="button"
          className={style.button}
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          Delete
        </button>
      </li>
  )
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;