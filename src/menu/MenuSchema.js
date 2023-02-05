import {User} from '../features/user/User'
import {Main} from '../features/main/Main'
import {UserComplete} from '../features/user/UserComplete'

export const MenuSchema = {
  '/': {
    component: Main
  },
  '/user': {
    component: User
  },
  '/user/complete': {
    component: UserComplete
  }
}