import {createSlice} from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name:'user',
  initialState: {
    info: {
      id: -1,
      name: '',
      email: '',
      password: ''
    },
  },
  reducers: {
    editUser: (state,action) => {
      const {id,value} = action.payload
      state.info = {...state.info,[id]: value}
    },
  }
})

export const getUserInfo =(state) => state.user.info
export const {editUser} = userSlice.actions
export default userSlice.reducer