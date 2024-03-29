import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCardList, getToken } from "./CardListAPI";
import { CardListModel } from "./CardListModel";

export const getCardListAsync = createAsyncThunk(
  "card-list/getCardList",
  async (requestData, amount) => {
    const response = await getCardList(requestData);
    return response.data.cards;
  }
);

export const getTokenAsync = createAsyncThunk(
  "card-list/getToken",
  async (amount) => {
    const response = await getToken(amount);
    return response.data.access_token;
  }
);

export const cardListSlice = createSlice({
  name: "cardList",
  initialState: CardListModel,
  reducers: {
    nextPage: (prevState) => {
      prevState.searchOption = {
        ...prevState.searchOption,
        page: prevState.searchOption.page + 1,
      };
    },
    addList: (prevState) => {
      const list = prevState.list;
      if (list.length >= 10) return;
      list.push(list.length + 1);
    },
    deleteList: (prevState) => {
      const list = prevState.list;
      if (list.length <= 0) return;
      list.pop();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCardListAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCardListAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        const newList = state.list;
        state.list = newList.concat(action.payload);
      })
      .addCase(getTokenAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTokenAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        localStorage.setItem("tk", String(action.payload));
      });
  },
});

export const getList = (state) => state.cardList.list;
export const getIsLoading = (state) => state.cardList.isLoading;
export const getSearchOption = (state) => state.cardList.searchOption;
export const { nextPage, addList, deleteList } = cardListSlice.actions;
export default cardListSlice.reducer;
