import React from 'react';
import {Button, Drawer} from "@mui/material";
import {useHistory} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
    <AppBar position="sticky">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={()=>toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        anchor={'left'}
        open={state}
        onClose={()=>toggleDrawer(false)}
      >
        <Button variant="text" onClick={onHome}>{'Home'}</Button>
        {/*<Button variant="text" onClick={onUser}>{'User'}</Button>*/}
        <Button variant="text" onClick={onList}>{'하스스톤'}</Button>
      </Drawer>
    </AppBar>
  );
}

export default LeftNav;
