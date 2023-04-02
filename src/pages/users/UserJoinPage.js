import React, {useEffect, useRef} from "react";
import '../../styles/UserJoinPage.css'
import {Button, Card, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getJoinData, onChangeJoinData} from "../../features/user/userSlice";
import {getFireBaseDBByPath, getRowKey, insertData} from "../../utils/FirebaseUtil";
import {useHistory} from "react-router-dom";

export function UserJoinPage() {
  const { email, password, passwordConfirm} = useSelector(getJoinData)
  const dispatch = useDispatch();
  const history = useHistory()
  const isDisabled = !email || !password || !passwordConfirm || (password !== passwordConfirm)
  const onChange = (id) => (e) => {
    const {target:{value}} = e
    dispatch(onChangeJoinData({id,value}))
  }

  const onJoinSuccess = () => {
    history.push('/')
  }

  const onJoin = () => {
    const dbRef = getFireBaseDBByPath('/users')
    const rowKey = getRowKey(dbRef)
    insertData(dbRef,rowKey,{user:{email,password}},()=>{onJoinSuccess()},()=>{console.log('fail')})
  }

  return (
    <div className={'UserJoinPage flex flex-one center vbox'}>
      <Card className={'card vbox'}>
        <div className={'title center'}>{'Easy Join'}</div>
        <div className={'vbox info'}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={onChange('email')}
            value={email}
          />
          <TextField
            id="outlined-basic"
            type={'password'}
            label="Password"
            variant="outlined"
            onChange={onChange('password')}
            value={password}
          />
          <TextField
            id="outlined-basic"
            type={'password'}
            label="Password-Confirm"
            variant="outlined"
            onChange={onChange('passwordConfirm')}
            value={passwordConfirm}
          />
        </div>

        <Button className={'join-btn'} onClick={onJoin} disabled={isDisabled}>{'Join!'}</Button>
      </Card>
    </div>
  )
}