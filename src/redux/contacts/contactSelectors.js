import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/filterSelectots';

export const getContacts = state => state.contacts.contacts;

export const filterContacts = createSelector([selectFilter], () => {});
