import React, {useEffect, useRef} from "react";
import '../../styles/UserJoinPage.css'
import {Button, Card, TextField} from "@mui/material";

export function UserJoinPage() {

  return (
    <div className={'UserJoinPage flex flex-one center vbox'}>
      <Card className={'card vbox'}>
        <div className={'title center'}>{'Easy Join'}</div>
        <div className={'vbox info'}>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" type={'password'} label="Password" variant="outlined" />
          <TextField id="outlined-basic" type={'password'} label="Password-Confirm" variant="outlined" />
        </div>

        <Button className={'join-btn'}>{'Join!'}</Button>
      </Card>
    </div>
  )
}