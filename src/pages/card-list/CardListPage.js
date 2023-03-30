import {useDispatch, useSelector} from "react-redux";
import {
  getCardListAsync,
  getIsLoading,
  getList,
  getSearchOption,
  nextPage
} from "../../features/card-list/slices/CardListSlice";
import {Card, CardContent, Skeleton, SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import React, {useEffect, useRef} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import '../../styles/CardListPage.css'
import {getFireBaseDBByPath, getRowKey, insertData} from "../../utils/FirebaseUtil";

export function CardListPage() {
  const intersectionRef  = useRef(null)
  const list = useSelector(getList)
  const isLoading = useSelector(getIsLoading)
  const searchOption = useSelector(getSearchOption)
  const {page, pageSize} = searchOption
  const dispatch = useDispatch();

  const onBookmark = (idx) => {
    const dbRef = getFireBaseDBByPath('/cra-redux')
    const rowKey = getRowKey(dbRef)
    insertData(dbRef, String(rowKey), {bookmarkInfo:{idx:idx}}, ()=>{}, ()=>{})
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
        {list.map(card=>{
          return (
            <Card key={card.id}>
              <CardContent>
                <div className={'cursor_pointer relative'} onClick={()=>onBookmark(card.id)}>
                  <BookmarkBorderIcon />
                  <BookmarkAddedIcon />
                </div>
                <img src={card.image}/>
              </CardContent>
            </Card>
          )
        })}
        {isLoading && renderSkeleton()}
        <div ref={intersectionRef} style={{height:50,width:'100%'}}/>
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
    dispatch(getCardListAsync(searchOption))
  },[page])

  useEffect(()=>{
    const io = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if (entry.isIntersecting) {
          dispatch(nextPage())
        }
      })
    },{threshold:0.5})
    io.observe(intersectionRef.current)
    return () => {
      io.disconnect()
    }
  },[])

  return (
    <div className={'CardListPage flex flex-one center vbox'}>
      {renderCardList()}
      {renderFooterDial()}
    </div>
  )
}