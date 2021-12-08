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
    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                <DialogItem name = 'Alex' id = "1"/>
                <DialogItem name = "Max" id = "2" />
                <DialogItem name = "Jein" id = "3" />
                <DialogItem name = "Julia" id = "4" />
                <DialogItem name = "Anna" id = "5" />
                <DialogItem name = "Lili" id = "6" />
            </div>
            <div className = {classes.messages}>
                <MessageItem message = "Hi"/>
                <MessageItem message = "How are you"/>
                <MessageItem message = "Bye"/>
            </div>
        </div>
    )
}

export default Dialogs