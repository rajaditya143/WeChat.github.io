import { useContext, useState, useEffect } from 'react';
import { Box } from '@material-ui/core';

import { UserContext } from '../../context/UserProvider';
import { AccountContext } from '../../context/AccountProvider';
import { getConversation } from '../../service/api';

//components
import ChatHeader from './ChatHeader';
import Messages from './Messages';


const Chat = () =>{
    const { person, setPerson } = useContext(UserContext);
    const { account  } = useContext(AccountContext);
    const [conversation, setConversation] = useState({});

    useEffect(() =>{
        const getConversationDetails = async () => {
            let data = await getConversation({ sender: account.googleId, receiver: person.googleId });
            setConversation(data);
        }
        getConversationDetails();

    },[person.googleId ,account.googleId])

    return(
        <Box>
            <ChatHeader />
            <Messages conversation = {conversation} person = {person} />
        </Box>
    )
}

export default Chat;