import {User} from '../features/user/User'
import {Main} from '../features/main/Main'
import {UserComplete} from '../features/user/UserComplete'
import {List} from "../features/list/List";

export const MenuSchema = {
  '/': {
    component: Main
  },
  '/user': {
    component: User
  },
  '/user/complete': {
    component: UserComplete
  },
  '/list': {
    component: List
  }
}