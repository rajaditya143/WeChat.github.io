import express from 'express';


import { addUser ,getUser } from '../controller/user-controller.js';
import {newConversation ,getConversation} from "../controller/conversation-controller";
import { newMessage , getMessage} from '../controller/message-controller.js';




const route = express.Router();


route.post('/add', addUser);
route.get('/users', getUser);


route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add',newMessage);
route.get('/message/get/:id', getMessage);;


export default route;