import { useDispatch, useSelector } from 'react-redux';
import { SearchContainer, SearchInput } from './Filter.styled';
import { changeFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/filterSelectots';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <SearchContainer>
      <p>Find contacts by name</p>
      <SearchInput
        onChange={e => dispatch(changeFilter(e.target.value))}
        type="text"
        value={filter}
      />
    </SearchContainer>
  );
};
