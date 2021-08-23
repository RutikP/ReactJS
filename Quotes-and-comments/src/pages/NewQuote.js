import React from 'react';
import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';

const NewQuote = () => {
    const history = useHistory();
    const addQuoteHandler = (quoteData) => {
        console.log(quoteData);
        history.push('/allquotes');
    };
    return (
        <QuoteForm onAddQuote={addQuoteHandler} />
    )
}

export default NewQuote
    