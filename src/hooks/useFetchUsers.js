import { useContext, useEffect } from "react";
import { UsersContext } from "../context/UsersContext";

const useFetchUsers = () => {
    const { users, setUsers } = useContext(UsersContext);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersResponse = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const postsResponse = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const usersResponseData = await usersResponse.json();
            const postsResponseData = await postsResponse.json();
            const enrichedUsers = usersResponseData.map((user) => ({
                ...user,
                posts: postsResponseData.filter(
                    (post) => post.userId === user.id
                ),
            }));
            setUsers(enrichedUsers);
        };
        if (!users) fetchUsers();
    }, []);

    return users;
};

export default useFetchUsers;
