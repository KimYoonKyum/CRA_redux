import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { editUser, getUserInfo, createUser } from "./userSlice";
import { useHistory } from "react-router-dom";

export function UserComplete() {
  const { id, name, email, password } = useSelector(getUserInfo);
  const history = useHistory();

  const onHome = () => {
    history.push("/");
  };

  return (
    <div className={"col"}>
      <div className={"col"}>
        <div className={"row"}>
          <span>{"이름"}</span>
          <input value={name} disabled />
        </div>
        <div className={"row"}>
          <span>{"이메일"}</span>
          <input value={email} disabled />
        </div>
        <div className={"row"}>
          <span>{"비밀번호"}</span>
          <input value={password} disabled />
        </div>
      </div>
      <button onClick={onHome}>{"홈으로"}</button>
    </div>
  );
}
