import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/filterSelectots';

export const selectContacts = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const filterContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, selectFilter) => {
    return contacts.filter(contact => {
      const contactName = contact.name.toLowerCase();
      const contactNumber = contact.number;

      return (
        contactName.includes(selectFilter.toLowerCase()) ||
        contactNumber.includes(selectFilter)
      );
    });
  }
);
