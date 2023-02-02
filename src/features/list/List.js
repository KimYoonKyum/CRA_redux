import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addList, deleteList, selectList} from './listSlice'
export function List() {
  const list = useSelector(selectList)
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(addList())
  }

  const onDelete = () => {
    dispatch(deleteList())
  }

  return (
    <div>
      <div>{`리스트 개수 : ${list.length}`}</div>
      <div>
        <button onClick={onAdd}>{'++'}</button>
        <button onClick={onDelete}>{'--'}</button>
      </div>
      <div style={{display:'flex', flexDirection:'horizon'}}>
        {list.map(d=>{return <div key={String(d)}>{d}</div>})}
      </div>
    </div>
  )
}