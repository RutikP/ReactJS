import React, { useState, useEffect } from 'react'


const BasicForm = () => {
  const [enteredFname, setFname] = useState('');
  const [enteredLname, setLname] = useState('');
  const [enteredEmail, setEmail] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const enteredFNameIsValid = enteredFname.trim() !== '';
  const enteredLNameIsValid = enteredLname.trim() !== '';
  const enteredEmailIsValid = enteredEmail.trim() !== '' &&
    enteredEmail.includes('@' && '.') && enteredEmail.trim().length > 5;
  const [FnameTouched, setFnameTouched] = useState(false);
  const [LnameTouched, setLnameTouched] = useState(false);
  const [EmailTouched, setEmailTouched] = useState(false);
  const enteredFNameIsInvalid = !enteredFNameIsValid && FnameTouched;
  const enteredLNameIsInvalid = !enteredLNameIsValid && LnameTouched;
  const enteredEmailIsInvalid = !enteredEmailIsValid && EmailTouched;

  useEffect(() => {
    if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
      setFormIsValid(true);
    }
    else {
      setFormIsValid(false);
    }
  }, [enteredFNameIsValid, enteredLNameIsValid, enteredEmailIsValid]);

  const fnameChangeHandler = event => {
    setFname(event.target.value);
  };

  const lnameChangeHandler = event => {
    setLname(event.target.value);
  };

  const emailChangeHandler = event => {
    setEmail(event.target.value);
  };

  const fnameinputBlurHandler = () => {
    setFnameTouched(true);
  };
  const lnameinputBlurHandler = () => {
    setLnameTouched(true);
  };
  const emailinputBlurHandler = () => {
    setEmailTouched(true);
  };

  const formSubmitHandler = (e) => {
    setFnameTouched(false);
    setLnameTouched(false);
    setEmailTouched(false);
    setFname('');
    setLname('');
    setEmail('');
    console.log("form submitted!!")
    e.preventDefault();
  };

  const FnameInputClass = enteredFNameIsInvalid ? 'form-control invalid' : 'form-control';
  const LnameInputClass = enteredLNameIsInvalid ? 'form-control invalid' : 'form-control';
  const EmailInputClass = enteredEmailIsInvalid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={FnameInputClass}>
          <label htmlFor='name' >First Name</label>
          <input type='text' id='fname' value={enteredFname} onChange={fnameChangeHandler} onBlur={fnameinputBlurHandler} />
          {FnameTouched && !enteredFNameIsValid && <p className="error-text">FName Input is not Valid</p>}
        </div>

        <div className={LnameInputClass}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='lname' value={enteredLname} onChange={lnameChangeHandler} onBlur={lnameinputBlurHandler} />
          {LnameTouched && !enteredLNameIsValid && <p className="error-text">LName Input is not Valid</p>}
        </div>
      </div>
      <div className={EmailInputClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange={emailChangeHandler} onBlur={emailinputBlurHandler} />
        {EmailTouched && !enteredEmailIsValid && <p className="error-text">Email Input is not Valid</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
