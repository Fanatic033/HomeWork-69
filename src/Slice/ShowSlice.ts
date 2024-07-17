import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Show {
  id: number;
  name: string;
}

interface ApiShow {
  show: Show;
}

export interface ShowState {
  shows: ApiShow[];
  error: boolean;
  isLoading: boolean;
}

export const initialState: ShowState = {
  shows: [],
  error: false,
  isLoading: false,
};

export const fetchShows = createAsyncThunk<ApiShow[], string, { rejectValue: string }>(
  'show/fetchShows',
  async (title, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${title}`);
      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  }
);

const ShowSlice = createSlice({
  name: 'Show',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchShows.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchShows.fulfilled, (state, action: PayloadAction<ApiShow[]>) => {
        state.isLoading = false;
        state.shows = action.payload;
      })
      .addCase(fetchShows.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const showsReducer = ShowSlice.reducer;