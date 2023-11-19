import { List, ListItem } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/api';

export const ContactList = () => {
  /*
  const getvisibleContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  */
  //const contacts = useSelector(getContacts);
  //const filter = useSelector(getFilter);
  //const visibleContacts = getvisibleContacts(contacts, filter);
  const visibleContacts = useSelector(selectVisibleContacts);

  const dispatch = useDispatch();
  const handleDelete = evt => dispatch(deleteContact(evt.target.id));

  return (
    <List>
      {visibleContacts.map(contact => (
        <ListItem key={contact.id}>
          <p>
            <span>{contact.name}: </span>
            <span>{contact.phone}</span>
          </p>

          <button
            type="button"
            id={contact.id}
            className="btn btn-outline"
            onClick={handleDelete}
          >
            Delete
          </button>
        </ListItem>
      ))}
    </List>
  );
};
