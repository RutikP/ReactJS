import React from 'react';
import { useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) => {
  const [isEntering, setisEntering] = useState(false);
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
  const finishedEnteringHandler = () =>{
    setisEntering(false);
  };
  const FocusHandler = () => {
    // console.log("Focus!");
    setisEntering(true);
  };

  return (
    <React.Fragment>
    <Prompt when={isEntering} message={(location)=> 'Are you sure you want to leave? All your entered data will be lost'} />
    <Card>
      <form onFocus={FocusHandler} className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={finishedEnteringHandler} className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
    </React.Fragment>
  );
};

export default QuoteForm;


/* In Prompt we have two props one is 'when' and another is 'messsage', if when is true then it prompts with message
here in message array function we have location as a parameter which is the location we are trying to go */


//Where useHistory gives us access to the history object, an object that allows us to change and manage the URL,

//useLocation gives us access to a location object which has information about the currently loaded page, about 
//the currently loaded URL.

/* 
So, we got this location object which has this search property with the query parameter data.
Now we can translate this into a JavaScript object, which is a bit easier to use for us
than this plain string here, by instantiating a new URLSearchParams object. And that's a built-in constructor function
built into the browser. So this is not coming from React Router, not coming from React.
This is a default JavaScript constructor function, a default JavaScript class so to say, which we can use in the browser.
*/