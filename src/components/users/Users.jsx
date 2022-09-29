import React, { useEffect } from "react";
import { fetchUsersAsync, selectUsers } from "../../redux/users/users";
import { useDispatch, useSelector } from "react-redux";


const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectUsers)

    useEffect(() => {
        dispatch(fetchUsersAsync());
    }, []);

    return (
        <div>
            {users.map((user, userIdx) =>
                <div key={userIdx}>
                    <h1>{user.userName}</h1>
                    <h2>{user.email}</h2>
                    <div>{user.firstName + ' ' + user.lastName}</div>
                    <hr />
                </div>)}
        </div>
    )
}

export default Users