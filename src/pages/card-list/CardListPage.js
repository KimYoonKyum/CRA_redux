import {useDispatch, useSelector} from "react-redux";
import {
  addList,
  deleteList,
  getCardListAsync,
  getTokenAsync,
  selectIsLoading,
  selectList
} from "../../features/list/listSlice";
import {Card, CardContent, Skeleton, SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import React, {useEffect} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import '../../styles/CardListPage.css'

export function CardListPage() {
  const list = useSelector(selectList)
  const isLoading = useSelector(selectIsLoading)
  const dispatch = useDispatch();

  const onApiToken = () => {
    dispatch(getTokenAsync())
  }

  const renderSkeleton = () => {
    return (
      <>
        <Skeleton variant="rounded" width={407} height={558} />
        <Skeleton variant="rounded" width={407} height={558} />
        <Skeleton variant="rounded" width={407} height={558} />
        <Skeleton variant="rounded" width={407} height={558} />
      </>
    )
  }

  const renderCardList = () => {
    return (
      <div className={'CardList flex flex-one hbox center wrap'}>
        {isLoading && renderSkeleton()}
        {list.map(card=>{
          return (
            <Card key={card.id}>
              <CardContent>
                <img src={card.image}/>
              </CardContent>
            </Card>
          )
        })}
      </div>
    )
  }

  const renderFooterDial = () => {
    return (
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          key={'dial'}
          icon={<MenuIcon />}
          tooltipTitle={'menu'}
        />
      </SpeedDial>
    )
  }

  useEffect(()=>{
    dispatch(getCardListAsync())
  },[])

  return (
    <div className={'CardListPage flex flex-one center vbox'}>
      <div>{`리스트 개수 : ${list.length}`}</div>
      {/*<div>*/}
      {/*  <button onClick={onApiToken}>{'Api token call'}</button>*/}
      {/*</div>*/}
      {renderCardList()}
      {renderFooterDial()}
    </div>
  )
}