import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './Cart.module.css';


const Cart = () => {
    const itemsSelector = useSelector(state => state.Items);
    let TotalPrice = useSelector(state => state.TotalPrice);
    const dispatch = useDispatch();
    function IncTotalprice(price, amount) {
        TotalPrice = TotalPrice + price * amount
        TotalPrice = Math.round(TotalPrice);
    }
    const itemsloaded = itemsSelector.map(item => {
        return <>
            <div className="card my-4 mx-4 p-4">
            <div className="row pt-2" key={item.id}>
                <div className="col">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <h4><i>Rs. {item.price}</i></h4>
                    
                </div>
                <div className="col" >
                        <button
                            className="btn btn-outline-dark"
                            style={{ display: 'inline', padding: '1px 8px 1px 8px', fontSize: '25px', marginRight: '5px' }}
                            onClick={() => dispatch({ type: 'incAmount', payload: { increment: 1, id: item.id } })}
                            onChange={IncTotalprice(item.price, item.amount)}
                        >
                            <b>+</b>
                        </button>
                        <p style={{ display: 'inline' }}>{item.amount}</p>
                        <button
                            className="btn btn-outline-dark"
                            style={{ display: 'inline', padding: '1px 8px 1px 8px', fontSize: '25px', marginLeft: '5px' }}
                            onClick={() => dispatch({ type: 'decAmount', payload: { decrement: 1, id: item.id } })}
                        >
                            <b>-</b>
                        </button><br></br><br></br>
                        <button
                            className="btn btn-outline-dark"
                            style={{paddingLeft:'28px',paddingRight:'28px'}}
                            onClick={() => dispatch({ type: 'deleteItem', item: item })}
                        >
                            Del
                        </button>
                    </div>
            </div>
            </div>
        </>
    })

return <>
        <div><br></br>
        <br></br>
            {itemsSelector.length > 0 && itemsloaded}
            {TotalPrice !== 0 && <h4 className="mx-4"><b>Total Amount: Rs.{TotalPrice} </b></h4>}
            {itemsSelector.length === 0 && <>
            <br></br>
            <p className={classes.zeroItemstag}>No Items Present</p>
            <br></br><p className={classes.ptagoflink}><Link to="/" className={classes.zeroItemslink} >Wanna Add Any?</Link></p></>}
        </div></>
}

export default Cart
