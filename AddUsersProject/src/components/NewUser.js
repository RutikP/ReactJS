import React from 'react'
import UserForm from './UserForm';

const NewUser = (props) => {
    const saveUserHandler = data => {
        const userData = {
            ...data
        }
        // console.log(userData);
        props.onSaveNewUser(userData);
    }
    return (
        <div>
            <UserForm onSaveUser={saveUserHandler}/>
        </div>
    )
}

export default NewUser
