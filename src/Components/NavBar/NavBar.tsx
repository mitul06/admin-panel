import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";




export default function NavBar() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'black', fontWeight: 600, fontSize: '25px' }}>
              ADMIN PANEL
            </Typography>

            <Link to='/'>
              <Button className='Button' color='inherit' variant="outlined" sx={{ textDecoration: "none", color: "black" }} >

                Home </Button></Link>
            <Link to='/adduser'>
              <Button variant="outlined" color='inherit' className='ms-3' sx={{ textDecoration: "none", color: "black" }}>
                Add  </Button></Link>

          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}