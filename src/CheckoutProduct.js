import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,title,price,rating}) {
    const[{basket},dispatch]=useStateValue();

    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE-FROM-BASKET",
            id:id,
            
        })
    }
    return (
            <div className='checkoutproduct'>
                <img src={image} alt="" className='checkoutproduct-img'/>
                <div className='checkoutproduct-info'>
                   <p className='checkoutproduct-title'>{title}</p>
                   <p className='checkoutproduct-price'>
                   <small>$</small>
                    <strong>{price}</strong></p>
                <div className='checkoutproduct-rating'>{Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>⭐</p>
                    ))}
                   </div>
                   <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
            </div>
    )
}
export default CheckoutProduct