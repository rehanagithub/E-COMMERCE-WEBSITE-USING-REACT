import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';


export default function Product({id,image,title,price,rating}) {

    const [state,dispatch]=useStateValue();

    const addToBasket=()=>{
        dispatch({
            type:"ADD-TO-BASKET",
            item:{
            id:id,
            image:image,
            title:title,
            price:price,
            rating:rating,
            },
        });
    };
  return (
    <div>
        <div className='product'>
            <div className='product-info'>
                <p>{title}</p>
                <p className='product-price'>
                    <small>$</small>
                    <string>{price}</string></p>
                <p className='product-rating'>
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>⭐</p>
                    ))}
                </p>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    </div>
  )
}
