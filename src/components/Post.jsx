import { useState } from "react";
import Popup from "./Popup";
import classes from "./Post.module.css";

function Post({ post }) {
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const togglePopupVisibility = () => {
        setIsPopupVisible((prevState) => !prevState);
    };

    return (
        <>
            <div onClick={togglePopupVisibility} className={classes.post}>
                <div className={classes.title}>{post.title}</div>
                <div>{post.body}</div>
            </div>
            {isPopupVisible && (
                <Popup onClose={togglePopupVisibility}>{post.body}</Popup>
            )}
        </>
    );
}

export default Post;
