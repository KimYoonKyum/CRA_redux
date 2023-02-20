import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getCardList} from "./listAPI";

export const getCardListAsync = createAsyncThunk(
  'list/getCardList',
  async (amount) => {
    const response = await getCardList(amount);
    return response.data.cards;
  }
);

export const listSlice = createSlice({
  name:'list',
  initialState: {
    list: [],
    isLoading: false
  },
  reducers: {
    addList: (prevState) => {
      const list = prevState.list
      if(list.length >= 10) return
      list.push(list.length+1)
    },
    deleteList:(prevState) => {
      const list = prevState.list
      if(list.length <= 0) return
      list.pop()
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCardListAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCardListAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      });
  },
})

export const selectList = (state) => state.list.list
export const selectIsLoading = (state) => state.list.isLoading
export const {addList, deleteList} = listSlice.actions
export default listSlice.reducer