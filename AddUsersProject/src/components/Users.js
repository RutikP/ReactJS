import React from 'react'
import UserInfo from './UserInfo';

const Users = (props) => {
    return (
        <div>
            {props.items.map(user => {
                return (
                    <UserInfo key={user.id} item={user}/>
                )
            })}
        </div>
    )
}

export default Users
