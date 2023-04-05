import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserEditInfo,
  editUser,
  resetEditUser,
  createUser,
} from "./userSlice";
import { useHistory } from "react-router-dom";

export function User() {
  const { name, email, password } = useSelector(getUserEditInfo);
  const dispatch = useDispatch();
  const history = useHistory();

  const onChange =
    (id) =>
    ({ target: { value } }) =>
      dispatch(editUser({ id, value }));

  const onSubmit = () => {
    dispatch(createUser());
    history.push("/user/complete");
  };

  useEffect(() => {
    dispatch(resetEditUser());
  }, []);

  return (
    <div className={"col"}>
      <div className={"col"}>
        <div className={"row"}>
          <span>{"이름"}</span>
          <input value={name} onChange={onChange("name")} />
        </div>
        <div className={"row"}>
          <span>{"이메일"}</span>
          <input value={email} onChange={onChange("email")} />
        </div>
        <div className={"row"}>
          <span>{"비밀번호"}</span>
          <input value={password} onChange={onChange("password")} />
        </div>
      </div>
      <button onClick={onSubmit}>{"가입하기"}</button>
    </div>
  );
}
