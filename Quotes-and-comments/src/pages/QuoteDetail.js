import React, { useState } from 'react';
import { useParams, Route, Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';


const DUMMY_Data = [
    {
        id: 'q1',
        author: 'Rushi',
        text: 'This is my first quote'
      },
      {
        id: 'q2',
        author: 'Ram',
        text: 'This is my second quote'
      }
];

const QuoteDetail = (props) => {
    const params = useParams();
    const [showComments, setshowComments] = useState(true);
    const quote = DUMMY_Data.find(item => item.id === params.quoteId);

    if(!quote){
        return <p>No quote found</p>
    }

    const showbtnHandler = () => {
        if(showComments){
            setshowComments(false);
        }
        else{
            setshowComments(true);
        }
    }
    
    return (
        <section>
            <HighlightedQuote text={quote.text} author={quote.author} />
            <div className="centered">
            {showComments && <Link className='btn--flat' onClick={showbtnHandler} to={`/allquotes/${params.quoteId}/comments`}>Show Comments</Link>}
            {!showComments && <Link className='btn--flat' onClick={showbtnHandler} to={`/allquotes/${params.quoteId}`}>Hide Comments</Link>}
            </div>
            {!showComments && 
            <Route path={`/allquotes/${params.quoteId}/comments`}>
                <Comments/>
            </Route>}
        </section>
    )
}

export default QuoteDetail
