import { Dialog ,withStyles ,Typography ,Box ,makeStyles ,ListItem ,List} from '@material-ui/core';
import { GoogleLogin , GoogleLogout } from 'react-google-login';
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { clientId } from '../../constants/data';
import {addUser} from "../../service/api.js"


const useStyle = makeStyles({
    component: {
        display: 'flex'
    },
   
    title: {
        fontSize: 26,
        marginBottom: 18,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 450  
    },

    title1: {
        fontSize: 36,
        marginBottom: 25,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 700  
    },
    list: {
        '&  > *': {
            padding: 0,
            marginTop: 15,
            marginLeft:20,
            fontSize: 18,
            lineHeight: '28px',
            color: '#4a4a4a'
        }
    },
    dialog: {
        padding: '56px 0 56px 56px',
    },
    qr: {
        margin: '50px 0 0 50px',
        height: 268,
        width: 275
    },
})

const style = {
    dialogPaper: {
        marginTop: '12%',
        height: '95%',
        width: '60%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden'
    }
};


const Login = ({classes}) =>{
    const url = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const classname = useStyle();
    
    const {account, setAccount,showloginButton, setShowloginButton, showlogoutButton, setShowlogoutButton} = useContext(AccountContext);

    const onLoginSuccess = async(res)=> {
       
       console.log('Login succesful' , res.profileObj);
       setAccount(res.profileObj);
       setShowloginButton(false);
       setShowlogoutButton(true);
       await addUser(res.profileObj);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    return(
       <Dialog 
        open = {true}
        classes = {{paper:classes.dialogPaper}}
        BackdropProps={{style: {backgroundColor: 'unset'}}}
       >
           <Box className={classname.component}>

               <Box className={classname.dialog}>
               <Typography className={classname.title1}>Welcome to WeChat 💌 </Typography>
               <Typography className={classname.title}>To use  WeChat on your computer :</Typography>
               <List className={classname.list}>
                        <ListItem>1. Open WeChat on your phone</ListItem>
                        <ListItem>2. Tap Menu  or Settings  and select Linked Devices</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
               </Box>
               <Box style={{position:'relative'}}>
               <img src={url} alt="QR" className={classname.qr} />

               <div style={{position: 'absolute', left: '48%', top: '44%', transform: 'translateX(0%) translateY(-25%)'}}>
                  <GoogleLogin
                      clientId={clientId}
                      buttonText=""
                      onSuccess={onLoginSuccess}
                      onFailure={onLoginFailure}
                      cookiePolicy={'single_host_origin'}
                      isSignedIn={true} />

                </div>
            </Box>

           </Box>
          
         
       </Dialog>
    )
}

export default withStyles(style)(Login);