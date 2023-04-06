import React from "react";
import { getFireStoreDB } from "../../utils/FirebaseUtil";
import { collection, query, where, getDocs } from "@firebase/firestore";
import { Button, Card, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsLoginFail,
  getLoginData,
  onChangeLoginData,
  onChangeIsLoginFail,
} from "../../features/login/LoginSlice";
import { useHistory } from "react-router-dom";

export function LoginPage() {
  const history = useHistory();
  const { email, password } = useSelector(getLoginData);
  const isLoginFail = useSelector(getIsLoginFail);
  const dispatch = useDispatch();
  const isDisabled = !email || !password;

  const onChange = (id) => (e) => {
    const {
      target: { value },
    } = e;
    dispatch(onChangeLoginData({ id, value }));
  };

  const onLogin = async () => {
    const db = getFireStoreDB();
    const userQuery = query(
      collection(db, "users"),
      where("email", "==", email),
      where("password", "==", password)
    );
    const querySnapshot = await getDocs(userQuery);
    if (querySnapshot.empty) {
      dispatch(onChangeIsLoginFail({ value: true }));
    } else {
      dispatch(onChangeIsLoginFail({ value: false }));
      querySnapshot.forEach((doc) => {
        localStorage.setItem("token", String(doc.id));
      });
      history.push("/");
    }
  };

  return (
    <div className={"UserJoinPage flex flex-one center vbox"}>
      <Card className={"card vbox"}>
        <div className={"title center"}>{"Easy Login"}</div>
        <div className={"vbox info"}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={onChange("email")}
            value={email}
          />
          <TextField
            id="outlined-basic"
            type={"password"}
            label="Password"
            variant="outlined"
            onChange={onChange("password")}
            value={password}
          />
        </div>

        <Button className={"join-btn"} onClick={onLogin} disabled={isDisabled}>
          {"로그인"}
        </Button>
        {isLoginFail && <div>{"로그인에 실패했습니다."}</div>}
      </Card>
    </div>
  );
}
