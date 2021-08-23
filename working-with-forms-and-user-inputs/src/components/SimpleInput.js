import React, { useState, useEffect } from 'react'


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState(''); 
  const [EnteredNameTouched, setEnteredNameTouched] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && EnteredNameTouched;
  useEffect(()=>{
    if(enteredNameIsValid){
      setFormIsValid(true);
    }
    else{
      setFormIsValid(false);
    }
  },[enteredNameIsValid])

  const inputChangeHandler = event => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = event => {
    setEnteredNameTouched(true);
  };
  const formSubmissionHandler = event => {
    event.preventDefault();
    console.log(enteredName);
    if(!enteredNameIsValid){
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameinputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control ';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className= {nameinputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' value={enteredName} onChange={inputChangeHandler} onBlur={nameInputBlurHandler}/>
        {nameInputIsInvalid && <p className="error-text">Name should not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
