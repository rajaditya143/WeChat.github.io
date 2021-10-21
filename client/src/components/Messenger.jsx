import { AppBar, Toolbar, makeStyles, Box } from '@material-ui/core';
import Login from './account/Login';
import { AccountContext } from '../context/AccountProvider';
import { useContext } from 'react';
import ChatBox from "./ChatBox";

const useStyles = makeStyles({
    component: {
        height: '100vh',
        background: '#DCDCDC'
    },
    header: {
        background: '#128C7E',
        height: 115,
        boxShadow: 'none'
    },
    loginHeader: {
        background: '#00bfa5',
        height: 200,
        boxShadow: 'none'
    },
})

const Messenger = () =>{
    const classes = useStyles();
    const { account } = useContext(AccountContext);
    return(
        <Box className={classes.component}>
        <AppBar className={ account ? classes.header : classes.loginHeader} >
            <Toolbar>

            </Toolbar>
        </AppBar>
         
         {account ? <ChatBox /> :<Login />}
        </Box>
    )
}

export default Messenger;