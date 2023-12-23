import classes from "./Popup.module.css";

function Popup({ children, onClose }) {
    return (
        <>
            <div className={classes.backdrop} onClick={onClose} />
            <dialog open className={classes.popup}>
                {children}
            </dialog>
        </>
    );
}

export default Popup;
