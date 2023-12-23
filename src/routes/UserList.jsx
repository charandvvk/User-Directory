import { Link } from "react-router-dom";
import useFetchUsers from "../hooks/useFetchUsers";
import classes from "./UserList.module.css";

function UserList() {
    const users = useFetchUsers();

    return (
        <>
            <div className={classes.title}>Directory</div>
            <ul className={classes.list}>
                {users &&
                    users.map((user) => (
                        <li key={user.id} className={classes.card}>
                            <Link to={`/${user.id}`} className={classes.link}>
                                <div> Name: {user.name}</div>
                                <div>Posts: {user.posts.length}</div>
                            </Link>
                        </li>
                    ))}
            </ul>
        </>
    );
}

export default UserList;
