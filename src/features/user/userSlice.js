import {createSlice} from '@reduxjs/toolkit'
import {UserStore} from './UserStore'

export const userSlice = createSlice({
  name:'user',
  initialState: UserStore,
  reducers: {
    editUser: (state,action) => {
      const {id,value} = action.payload
      state.editInfo = {...state.editInfo,[id]: value}
    },
    createUser: (state) => {
      state.info = {...state.editInfo}
    },
    resetEditUser:(state) => {
      state.editInfo = {
        id: -1,
        name: '',
        email: '',
        password: ''
      }
    }
  }
})

export const getUserEditInfo =(state) => state.user.editInfo
export const getUserInfo =(state) => state.user.info
export const {editUser, createUser, resetEditUser} = userSlice.actions
export default userSlice.reducer