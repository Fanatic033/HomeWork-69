import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {useAppDispatch, useAppSelector} from '../../redux-hooks.ts';
import * as React from 'react';
import {useState} from 'react';
import {fetchShows} from '../../Slice/ShowSlice.ts';

const InputAutoComplete = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useAppDispatch();
  const shows = useAppSelector((state) => state.show.shows);

  const onValueChange = (e: React.ChangeEvent<{}>, value: string) => {
    e.preventDefault();
    setInputValue(value);
    if (value) {
      dispatch(fetchShows(value));
    }
  };

  const showOption = shows.map((item) => ({
    name: item.show.name,
    id: item.show.id,
  }));
  return (
    <>
      <label>
        <strong className={'me-1'}>
          Search Tv Show:
        </strong>
        <Autocomplete
          className="d-inline-flex"
          disablePortal
          inputValue={inputValue}
          onInputChange={onValueChange}
          id="combo-box-demo"
          options={showOption}
          getOptionLabel={(option) => option.name || ''}
          sx={{width: 300}}
          renderInput={(params) => <TextField {...params} label="TV Shows"/>}
        />
      </label>

    </>
  );
};
export default InputAutoComplete;
