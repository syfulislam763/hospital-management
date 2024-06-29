import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';


export default function ButtonAppBar() {
  return (<div style={{width:'80%'}}>
    <Box s sx={{ flexGrow: 1, backgroundColor: '#04aa6d' }}>
      <AppBar style={{backgroundColor:"#04aa6d"}} elevation={0} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link href={'/'}>Hospital Management</Link>
          </Typography>
          <div>
            <Button color="inherit"><Link href={'/allDoctors'}>All Doctors</Link></Button>
            <Button color="inherit">Hospital & Diagnostic</Button>
            <Button color="inherit">Blood</Button>
            <Button color="inherit">Ambulance</Button>
            <Button color="inherit"><Link href={"/account"}>Account</Link></Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
    </div>);
}
