import React from 'react';
import Item from './Item';
import './Items.css'

const DUMMY_ITEMS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
      amount: 1
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
      amount: 1
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
      amount: 1
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
      amount: 1
    },
  ];

const Items = () => {
    const Items = DUMMY_ITEMS.map(item => {
      return  <Item key={item.id} id={item.id} name={item.name} description={item.description} amount={item.amount} price={item.price} item={item}/>
    })
    return (
        <div className="my-5  card bg-dark" style={{border:'3px solid teal'}}>
            {Items}
        </div>
    )
}

export default Items


