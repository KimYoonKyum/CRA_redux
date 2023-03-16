import {User} from '../features/user/User'
import {Main} from '../features/main/Main'
import {UserComplete} from '../features/user/UserComplete'
import {CardList} from "../features/card-list/components/CardList";
import {CardListPage} from "../pages/card-list/CardListPage";

export const MenuSchema = {
  '/': {
    component: Main
  },
  '/card-list': {
    component: CardListPage
  }
}