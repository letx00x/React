import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className = {classes.dialog + ' ' + classes.active}>
            <NavLink to = {path}>{props.name}</NavLink> 
        </div>
    )
}

const MessageItem = (props) =>{
    return(
        <div className = {classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id:1, name: 'Alex'},
        {id:2, name: 'Max'},
        {id:3, name: 'Jein'},
        {id:4, name: 'Julia'},
        {id:5, name: 'Anna'},
        {id:6, name: 'Lili'},
    ]

    let messagesData = [
        {id:1, message: 'hi'},
        {id:2, message: 'How are you?'},
        {id:3, message: 'Bye'}
    ]

    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                <DialogItem name = {dialogsData[0].name} id = {dialogsData[0].id}/>
                <DialogItem name = {dialogsData[1].name} id = {dialogsData[1].id} />                
            </div>
            <div className = {classes.messages}>
                <MessageItem message = {messagesData[0].message}/>
                <MessageItem message = {messagesData[1].message}/>
                <MessageItem message = {messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs