import { Link, useParams } from "react-router-dom";
import Post from "../components/Post";
import useFetchUsers from "../hooks/useFetchUsers";
import Clock from "../components/Clock";
import classes from "./UserDetails.module.css";

function UserDetails() {
    const users = useFetchUsers();
    const { id } = useParams();
    const user = users?.find((user) => user.id == id);

    return (
        <>
            <div className={classes.top}>
                <Link to="/" className={classes.link}>
                    Back
                </Link>
                <Clock />
            </div>
            <div className={classes.title}>Profile Page</div>
            {user && (
                <>
                    <div className={classes.details}>
                        <div>
                            <div>{user.name}</div>
                            <div className={classes.flex}>
                                {user.username}
                                <span className={classes.pipe}>|</span>
                                {user.company.catchPhrase}
                            </div>
                        </div>
                        <div>
                            <div>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</div>
                            <div className={classes.flex}>
                                {user.email}
                                <span className={classes.pipe}>|</span>
                                {user.phone}
                            </div>
                        </div>
                    </div>
                    <ul className={classes.posts}>
                        {user.posts.map((post) => (
                            <li key={post.id} className={classes.card}>
                                <Post post={post} />
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}

export default UserDetails;
