import { Main } from "../features/main/Main";
import { CardListPage } from "../pages/card-list/CardListPage";
import { UserJoinPage } from "../pages/users/UserJoinPage";
import { LoginPage } from "../pages/login/LoginPage";

export const MenuSchema = {
  "/": {
    component: Main,
  },
  "/card-list": {
    component: CardListPage,
  },
  "/user/user-join": {
    component: UserJoinPage,
  },
  "/login": {
    component: LoginPage,
  },
};
