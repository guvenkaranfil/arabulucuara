import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import client from '../../../api/Client';

import {Banner, SiteNew, NewlyJoinedUser, NewlyOperation, NewlyPublishedArticle} from '../types';

export interface HomeState {
  isLoading: boolean;
  banners?: Array<Banner>;
  siteNews?: Array<SiteNew>;
  newlyJoinedUsers?: Array<NewlyJoinedUser>;
  newlyOperations?: Array<NewlyOperation>;
  articles?: Array<NewlyPublishedArticle>;
}

export const homeState: HomeState = {
  isLoading: false,
  banners: undefined,
  siteNews: undefined,
  newlyJoinedUsers: undefined,
  newlyOperations: undefined,
  articles: undefined,
};

export const homeSlice = createSlice({
  name: 'home',
  initialState: homeState,

  reducers: {
    setHomeDatas: (state, action) => {
      return state + action.payload;
    },
  },

  // extraReducers: builder => {
  //   builder.addCase(fetchHomeData.fulfilled, (state, action) => {
  //     console.log('action.payload on extraReducers:', action.payload);
  //     return state + action.payload;
  //   });
  // },
});

export const fetchHomeData = createAsyncThunk('', async () => {
  const response = await client.get('/Home/GetHome');
  setHomeDatas(response);
  return response.data;
});

export const {setHomeDatas} = homeSlice.actions;

export default homeSlice.reducer;
