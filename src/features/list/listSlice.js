import {createSlice} from '@reduxjs/toolkit'

export const listSlice = createSlice({
  name:'list',
  initialState: {
    list: [],
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
  }
})

export const selectList = (state) => state.list.list
export const {addList, deleteList} = listSlice.actions
export default listSlice.reducer