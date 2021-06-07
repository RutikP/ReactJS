import React from 'react'
import './UserInfo.css'

const UserInfo = ({item}) => {
    return (
        <div>
        <div className="card">
            <div className="card-inner">
            {item.UserName}({item.UserAge} years old)
            </div>
        </div>
        <br/>
        </div>
    )
}

export default UserInfo
