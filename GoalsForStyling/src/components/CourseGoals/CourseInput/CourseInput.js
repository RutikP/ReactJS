import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
// import './CourseInput.css';

const FormControl = styled.div`

  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}


& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.inValid label {
  color: red;
}

&.inValid input {
  background-color: salmon;
  border-color: red ;
}
`;


const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [IsValid,SetIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0){
      SetIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0){
      SetIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={!IsValid && 'inValid'}>
        <label>Course Goal</label>
        <input type="text" 
        value={enteredValue}
        onChange={goalInputChangeHandler} />
        </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

// Inline CSS Styling
// ------------------
// const [IsValid,SetIsValid] = useState(true);
// <label style={{color: !IsValid ? 'red' : 'black'}}>Course Goal</label>
//         <input type="text" 
//         style={{borderColor: !IsValid ? 'red' : '#ccc',
//         background: !IsValid ? 'salmon' : 'transparent'}} 
//         onChange={goalInputChangeHandler} />

// External CSS
// <div className={`form-control ${!IsValid ? 'inValid' : ''}`}></div>
// In External CSS File you should use it like .form-control.inValid



export default CourseInput;
