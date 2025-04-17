import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{basket},dispatch]=useStateValue();
  return (
    <div className='checkout'>

      <div className='checkout-top'>
        <img
          src="https://cbx-prod.b-cdn.net/COLOURBOX61295228.jpg?width=800&height=800&quality=70"
          alt=""
          className="checkout-ad"
        />
        <Subtotal />
      </div>

      <div className='checkout-left'>
        <h2 className='checkout-title'>Your Shopping Basket</h2>
        {basket.map(item=>(
          <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}
export default Checkout
