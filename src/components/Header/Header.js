import React, {useContext, useState} from 'react';
import Logo from '../../images/Logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import './Header.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = ({hiddenCart, toggleCart}) => {
  const [hidden, setHidden] = useState("hidden");
  const toggleNavbar = (isHidden) => {
    if (isHidden === "hidden") {
      setHidden("");
    }else{
      setHidden("hidden");
    }
  }
  const {user} = useContext(AuthContext);
  // console.log(user);

  return (
    <header className='header'>
      <nav className='nav'>
        <img src={Logo} alt="" />
        <div className={`transparent-layer ${hidden}`}>
          <div className='navbar'>
            {/* <Link to="/">Shop</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link> */}
            <Link to="/about">About</Link>
            <span>{user?.email}</span>
          </div>
        </div>
        <button onClick={() => toggleCart(hiddenCart)} className='show-cart-btn'>
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
        <button className="menu-btn" onClick={() => toggleNavbar(hidden)}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </nav>
    </header>
  );
}

export default Header;
