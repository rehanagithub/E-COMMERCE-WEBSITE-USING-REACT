import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import './Header.css'
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket,dispatch}]=useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{textDecoration:"none"}}>
         <div className="header__logo">
        <StorefrontIcon className="header__logoImage" fontSize="large"/>
        <h2 className="header-title">eShop</h2>
      </div>
      </Link>
        
      <div className="header__search">
        
        <input type="text" className="header-search-box"/>
        <SearchIcon className="header-search-icon"/>
      </div>
      <div className="header-nav">
        <Link to='/login' style={{textDecoration:'none'}}>
        <div className="nav-item">
          <span className="nav-ItemLineOne">Hello Guest</span>
          <span className="nav-ItemLineTwo">Sign In</span>
        </div>
        </Link>
        <div className="nav-item">
        <span className="nav-ItemLineOne">Your</span>
        <span className="nav-ItemLineTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{textDecoration:"none"}}>
        <div className="nav-item-bas">
        <ShoppingBasketIcon className="itemBasket"/>
        <span className="nav-ItemLineTwo nav-basketCount">{basket.length}</span>
        </div>
        </Link>
      </div>
    </div>
  )
}
export default Header;