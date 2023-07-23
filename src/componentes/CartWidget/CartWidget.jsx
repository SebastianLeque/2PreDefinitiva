import React from 'react'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'
import './CartWidget.css'

const CartWidget = () => {
    const {cantidadTotal} = useContext(CarritoContext)
    const imgCarrito = "https://static.vecteezy.com/system/resources/previews/004/999/463/non_2x/shopping-cart-icon-illustration-free-vector.jpg"
  
    return (
    
    <div>
        <Link to ="/cart">
        <img className="imgCarrito" src={imgCarrito} alt="Carrito de compras" />
        </Link>
        {
            cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }
        
    </div>
  )
}

export default CartWidget