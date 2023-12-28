import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Icon from '../../../assets/react.svg'
import CustomizedMenus from '../FormComponents/NavButtons';



export default function ButtonAppBar() {
  const NavList=["About Us","Service","How agent","blogs"]
  return (
    <Box sx={{ flexGrow: 1 ,position:'absolute',top:'0px',zIndex:2,width:'99%'}}>
      <AppBar position="static" sx={{boxShadow:'none'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Finvista
          </Typography>
          {NavList.map((item,index)=>(
            <CustomizedMenus item={item} key={index}/>
          ))}
          <Button color="inherit">Blog</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
