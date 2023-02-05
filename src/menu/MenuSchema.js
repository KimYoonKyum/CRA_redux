import {User} from '../features/user/User'
import {Main} from '../features/main/Main'

export const MenuSchema = {
  '/': {
    component: Main
  },
  '/user': {
    component: User
  }
}