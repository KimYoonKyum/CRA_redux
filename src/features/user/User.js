import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getUserInfo, editUser} from './userSlice'

export function User() {
  const {id, name, email, password} = useSelector(getUserInfo)
  const dispatch = useDispatch();

  const onChange = (id) => (e) => {
    const {target:{value}} = e
    dispatch(editUser({id, value}))
  }

  return (
    <div className={'col'}>
      <div className={'col'}>
        <div className={'row'}>
          <span>{'이름'}</span>
          <input value={name} onChange={onChange('name')}/>
        </div>
        <div className={'row'}>
          <span>{'이메일'}</span>
          <input value={email} onChange={onChange('email')}/>
        </div>
        <div className={'row'}>
          <span>{'비밀번호'}</span>
          <input value={password} onChange={onChange('password')}/>
        </div>
      </div>
    </div>
  )
}