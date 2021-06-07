import React,{useState} from 'react';
import Users from './components/Users';
import NewUser from './components/NewUser';

const userDummyList = [
  {
    id: "1",
    UserName : "Rahul P",
    UserAge : 32
  },
  {
    id: "2",
    UserName : "Rutik P",
    UserAge : 22
  }
]
const App = () => {
  const [UserData,setUserData] = useState(userDummyList);
 const NewUserHandler = enteredData => {
  setUserData(prevData=> {
    // console.log(prevData);
    return [...prevData, enteredData];
  });
    // console.log(enteredData, UserData);
 }
  return (
    <div>
      <NewUser onSaveNewUser={NewUserHandler}/>
      <br></br>
      <Users items={UserData}/>
    </div>
  )
}

export default App