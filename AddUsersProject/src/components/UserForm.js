import React, { useState } from 'react'
import './UserForm.css';

const UserForm = (props) => {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState();
    const [IsNameValid, setIsNameValid] = useState(true);


    const userNameHandler = (e) => {
        setUserName(e.target.value);
        // console.log(e.target.value);
        if (e.target.value.length > 0) {
            setIsNameValid(true);
        }
    }

    const userAgeHandler = (e) => {
        setUserAge(e.target.value);
    }
    function on() {
        if (userAge <= 0) {
            document.getElementById("overlay").style.display = "block";
            // document.getElementById("text").style.display = "block";
            return;
        }
        document.getElementById("overlay").style.display = "block";
    }

    function off() {
        document.getElementById("overlay").style.display = "none";
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            id: Math.random().toString(),
            UserName: userName,
            UserAge: userAge
        }
        if (userName.trim().length === 0) {
            setIsNameValid(false);
            return;
        }
        if (userAge <= 0) {
            on();
            setUserAge('');
            return;
        }
        if (!userAge) {
            on();
            return;
        }
        props.onSaveUser(data)
        // console.log(data);
        setUserName('');
        setUserAge('');
    }

    return (
        <div className="container" style={{ marginTop: '30px' }}>
            <h2 className="text-center heading">Adding User</h2>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="username" style={{ color: !IsNameValid ? 'red' : 'gray' }}>User Name</label>
                    <input type="text" style={{ backgroundColor: !IsNameValid ? 'salmon' : 'transparent' }} className="form-control" value={userName} onChange={userNameHandler} id="username" placeholder="Enter Username" />
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input type="number" style={{ backgroundColor: 'transparent' }} className="form-control" value={userAge} max="120" onChange={userAgeHandler} id="age" placeholder="Enter Age" />
                </div>
                <button type="submit" className="btn1">Submit</button>
            </form>
            <div id="overlay" >
                <div id="text" >
                    <p className="text-center">Invalid Input</p>
                    <h2 style={{ margin: 'auto 20px 5px 20px' }}>Age should be between 1 and 120</h2>
                    <button className="btn btn-danger float-right mx-3" onClick={off}>Okay</button>
                </div>
            </div>
        </div>
    )
}

export default UserForm
