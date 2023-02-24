import {useDispatch, useSelector} from "react-redux";
import {
  addList,
  deleteList,
  getCardListAsync,
  getTokenAsync,
  selectIsLoading,
  selectList
} from "../../features/list/listSlice";
import {Card, CardContent, Skeleton} from "@mui/material";
import React from "react";
import '../../styles/CardListPage.css'

export function CardListPage() {
  const list = useSelector(selectList)
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch();

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
    <div className={'CardListPage flex flex-one center vbox'}>
      <div>{`리스트 개수 : ${list.length}`}</div>
      <div>
        <button onClick={onApiCall}>{'Api call'}</button>
        <button onClick={onApiToken}>{'Api token call'}</button>
      </div>
      <div className={'CardList flex vbox'}>
        {isLoading && renderSkeleton()}
        {list.map(card=>{
          return (
            // <div key={card.id} className={'flex col'}>
            //   {card.name}
            //   <img src={card.image} />
            // </div>
          <Card>
            <CardContent>
              <img src={card.image} />
            </CardContent>
          </Card>
          )
        })}
      </div>
    </div>
  )
}