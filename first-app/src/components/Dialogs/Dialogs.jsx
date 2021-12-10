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

const Message = (props) =>{
    return(
        <div className = {classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id:1, name: 'Alex'},
        {id:2, name: 'Max'},
        {id:3, name: 'Jein'},
        {id:4, name: 'Julia'},
        {id:5, name: 'Anna'},
        {id:6, name: 'Lili'},
    ]

    let messages = [
        {id:1, message: 'hi'},
        {id:2, message: 'How are you?'},
        {id:3, message: 'Bye'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name = {d.name} id={d.id} />)
    let messagesElements = messages.map(m => <Message message = {m.message}/>)    

    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                {dialogsElements}              
            </div>
            <div className = {classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs