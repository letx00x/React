import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className = {classes.dialogs}>
            <div className = {classes.dialogsItems}>
                <div className = {classes.dialog + ' ' + classes.active}>
                    Alex
                </div>
                <div className = {classes.dialog}>
                    Tony
                </div>
                <div className = {classes.dialog}>
                    Boris
                </div>
                <div className = {classes.dialog}>
                    Max
                </div>
                <div className = {classes.dialog}>
                    John
                </div>
            </div>
            <div className = {classes.messages}>
                <div className = {classes.message}>Hi</div>
                <div className = {classes.message}>How are you</div>
                <div className = {classes.message}>Bye</div>
            </div>
        </div>
    )
}

export default Dialogs