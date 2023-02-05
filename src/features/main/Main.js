import React from 'react';
import {Link} from 'react-router-dom'

export function Main() {
  return (
    <div className={'col'}>
      <Link to={'/user'} >{'유저 페이지'}</Link>
    </div>
  )
}