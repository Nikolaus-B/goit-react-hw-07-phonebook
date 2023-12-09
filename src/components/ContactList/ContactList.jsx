import { useDispatch, useSelector } from 'react-redux';
import {
  PhonebookButton,
  PhonebookItem,
  PhonebookList,
  PhonebookNumber,
} from './ContactList.styled';
import { Notify } from 'notiflix';
import { deleteContact } from 'redux/contacts/operations';
import { filterContacts } from 'redux/contacts/contactSelectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(filterContacts);

  return (
    <PhonebookList>
      {contacts.map(item => {
        return (
          <PhonebookItem key={item.id}>
            <p>
              {item.name}: <PhonebookNumber>{item.number}</PhonebookNumber>
            </p>
            <PhonebookButton
              onClick={() => {
                Notify.info(`${item.name} removed from your phone book`);
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
