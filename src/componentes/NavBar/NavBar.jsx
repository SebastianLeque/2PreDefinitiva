import React, {useState} from "react";
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const Navbar = () => {

  const [active, setActive] = useState("nav__menu")
  const [toggleIcon, setToggleIcon] = useState("nav__toggler")
  const imgCarrito = "https://static.vecteezy.com/system/resources/previews/004/999/463/non_2x/shopping-cart-icon-illustration-free-vector.jpg";

    const navToggle = () => {
      active === 'nav__menu'
       ? setActive("nav__menu nav__active")
       : setActive("nav__menu")
      

       toggleIcon === 'nav__toggler'
       ? setToggleIcon('nav__toggler toggle')
       : setToggleIcon("nav__toggler")

    }

  return (
    <header>
    <nav className="nav">
        <Link to="/">
          <h1>Jugueteria</h1>
       </Link>
       <div className="carrito-num">
            <img className='carrito' src={imgCarrito} alt="carrito" />
            <p>5</p>
        </div>
      <ul className={active}>
        <li className="nav__item">
            <NavLink to="/categoria/1"> Autos </NavLink>
        </li>
        <li className="nav__item">
            <NavLink to="/categoria/2"> Figuras </NavLink>
        </li>
        <li className="nav__item">
             <NavLink to="/categoria/3"> Pelotas </NavLink>
        </li>

      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  
    </header>
    
  );
};

export default Navbar;

