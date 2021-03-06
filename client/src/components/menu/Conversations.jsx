import { useContext, useEffect, useState ,useRef  } from 'react';
import { makeStyles, Box  } from "@material-ui/core";

import { getUsers } from "../../service/api";
import {AccountContext} from "../../context/AccountProvider";

//components
import Conversation from "./Conversation"


const useStyles = makeStyles({
    component: {
        overflow: 'overlay',
        height: '85vh'
    },
    divider: {
        margin: '0 0 0 67px',
        backgroundColor: '#F2F2F2'
    }
})

const Conversations = ({text}) =>{
    const classes = useStyles();
    const[users,setUsers] = useState([]);
    const { account, socket, setActiveUsers } = useContext(AccountContext);
   

    useEffect(()=>{
        const fetchData = async () =>{
         const data = await getUsers();
         let fiteredData = data.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
         setUsers(fiteredData);
        }
        fetchData();
    },[text]);

    useEffect(() => {
        socket.current.emit('addUser', account.googleId);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])
    
    return(
     <Box className={classes.component}>
        {
            users.map(user =>(
                user.googleId !== account.googleId &&
               <Conversation user={user} />
            ))
        }
     </Box>
    )
}

export default Conversations;