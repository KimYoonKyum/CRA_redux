import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addList, deleteList, getCardListAsync, getTokenAsync, selectIsLoading, selectList} from './listSlice'
import {Skeleton} from "@mui/material";
export function List() {
  const list = useSelector(selectList)
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch();

  const onAdd = () => {
    dispatch(addList())
  }

  const onDelete = () => {
    dispatch(deleteList())
  }

  const onApiCall = () => {
    dispatch(getCardListAsync())
  }

  const onApiToken = () => {
    dispatch(getTokenAsync())
  }

  const renderSkeleton = () => {
    return (
      <>
        <Skeleton variant="rounded" width={210} height={60} style={{marginTop:10}}/>
        <Skeleton variant="rounded" width={210} height={60} style={{marginTop:10}}/>
        <Skeleton variant="rounded" width={210} height={60} style={{marginTop:10}}/>
        <Skeleton variant="rounded" width={210} height={60} style={{marginTop:10}}/>
      </>
    )
  }

  return (
    <div className={'flex col'}>
      <div>{`리스트 개수 : ${list.length}`}</div>
      <div>
        <button onClick={onAdd}>{'++'}</button>
        <button onClick={onDelete}>{'--'}</button>
        <button onClick={onApiCall}>{'Api call'}</button>
        <button onClick={onApiToken}>{'Api token call'}</button>
      </div>
      <div className={'flex col'}>
        {isLoading && renderSkeleton()}
        {list.map(card=>{
          return (
            <div key={card.id} className={'flex col'}>
              {card.name}
              <img src={card.image} />
            </div>
          )
        })}
      </div>
    </div>
  )
}