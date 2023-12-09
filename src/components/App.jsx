import { PhoneForm } from './PhoneForm/PhoneForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './MainPageStyle.styled';
import { NoPhoneMessage } from './NoPhoneMessage/NoPhoneMessage';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/contacts/contactSelectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && !error && <Loader />}
      <h1>Phonebook</h1>
      <PhoneForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 ? <ContactList /> : <NoPhoneMessage />}
      <GlobalStyle />
    </Container>
  );
};
