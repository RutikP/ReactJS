import React from 'react';
import { useDispatch } from 'react-redux';

const Item = (props) => {
    const dispatch = useDispatch();;

    const OnAddToCartHandler = () => {
        dispatch({type:'addItem',item: props.item});
    };

    return (
        <React.Fragment>
        <div className="row pt-2" key={props.id}>
                <div className="col" style={{color:'white'}}>
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                    <h4><i>Rs. {props.price}</i></h4>
                </div>
                <div className="col">
                    <button className="btn btn-success" onClick={OnAddToCartHandler}>Add to Cart</button>
                </div>
            </div>
            <hr style={{color:'teal',height:'3px'}}></hr>
        </React.Fragment>
    )
}

export default Item;
