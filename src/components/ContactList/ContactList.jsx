import { useDispatch, useSelector } from 'react-redux';
import {
  PhonebookButton,
  PhonebookItem,
  PhonebookList,
  PhonebookNumber,
} from './ContactList.styled';

import { Notify } from 'notiflix';
import { deleteContact } from 'redux/operations';
import { getContacts } from 'redux/contacts/contactSelectors';
import { selectFilter } from 'redux/filter/filterSelectots';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const contacts = useSelector(getContacts);

  const filterContacts = () => {
    return contacts.filter(contact => {
      const contactName = contact.contact.name.toLowerCase();
      const contactNumber = contact.contact.number;

      return (
        contactName.includes(filter.toLowerCase()) ||
        contactNumber.includes(filter)
      );
    });
  };

  const filteredUsers = filterContacts();

  return (
    <PhonebookList>
      {filteredUsers.map(item => {
        return (
          <PhonebookItem key={item.id}>
            <p>
              {item.contact.name}:{' '}
              <PhonebookNumber>{item.contact.number}</PhonebookNumber>
            </p>
            <PhonebookButton
              onClick={() => {
                Notify.info(
                  `${item.contact.name} removed from your phone book`
                );
                dispatch(deleteContact(item.id));
              }}
            >
              Delete
            </PhonebookButton>
          </PhonebookItem>
        );
      })}
    </PhonebookList>
  );
};
