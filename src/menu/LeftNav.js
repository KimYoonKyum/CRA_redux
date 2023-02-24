import React from 'react';
import {Button, Drawer} from "@mui/material";
import {useHistory} from "react-router-dom";

function LeftNav() {
  const history = useHistory()
  const [state, setState] = React.useState(false);
  const onBack = () => {
    setState(false)
    history.goBack()
  }
  const onHome = () => {
    setState(false)
    history.push('/')
  }
  const onUser = () => {
    setState(false)
    history.push('/user')
  }
  const onList = () => {
    setState(false)
    history.push('/card-list')
  }

  const toggleDrawer = (toggle) => {
    setState(toggle)
  }

  return (
    <div className="flex col">
      <Button onClick={()=>toggleDrawer(true)}>{'Menu'}</Button>
      <Drawer
        anchor={'left'}
        open={state}
        onClose={()=>toggleDrawer(false)}
      >
        <Button variant="text" onClick={onHome}>{'Home'}</Button>
        <Button variant="text" onClick={onUser}>{'User'}</Button>
        <Button variant="text" onClick={onList}>{'하스스톤'}</Button>
      </Drawer>
    </div>
  );
}

export default LeftNav;
