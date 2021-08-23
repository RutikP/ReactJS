import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const AllQuotes = () => {
    const quotes = [
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
    return (
        <div>
            <QuoteList quotes={quotes} />
        </div>
    )
}

export default AllQuotes
