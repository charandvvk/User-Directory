import { createContext, useState } from "react";

export const UsersContext = createContext();

export const UsersProvider = (props) => {
    const [users, setUsers] = useState();
    const usersContext = {
        users,
        setUsers,
    };

    return (
        <UsersContext.Provider value={usersContext}>
            {props.children}
        </UsersContext.Provider>
    );
};
