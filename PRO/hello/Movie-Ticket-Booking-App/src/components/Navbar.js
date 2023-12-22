import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
    const navigate = useNavigate(); 
    function refreshPage(){
        navigate('/')
        window.location.reload();
    } 
    return (
        <>
            <AppBar position="static" style={{backgroundColor:'#f70542'}}>
                <Toolbar>
                    <Typography variant='h6' component='h6' sx={{ flexGrow: 1,fontWeight: 'bold' }}>
                        MOVIE BOOKING APP
                    </Typography>
                    <Stack direction='row'>
                    <Link className='hom' to='/about'><Button color='inherit' >ABOUT</Button> </Link>
                    <Link className='hom' to='/log'><Button color='inherit' >Login</Button> </Link>
                    <Link className='hom' to='/reg'><Button color='inherit' >Register</Button> </Link>
                    <Link className='hom' to='/'><Button color='inherit' >Home</Button> </Link>
                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;