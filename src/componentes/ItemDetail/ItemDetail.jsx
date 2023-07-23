import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'

const ItemDetail = ({id, nombre, precio, img, stock, detalle}) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarProducto} = useContext(CarritoContext)


  const manejadorCantidad = (cantidad) =>{
    setAgregarCantidad(cantidad)
    const item = {id, nombre, precio}
    agregarProducto(item, cantidad)
  }

  return (
    <div>
        <h2>Nombre del producto: {nombre} </h2>
        <h3>Precio: $ {precio} </h3>
        <h3>ID: {id} </h3>
        <p>{detalle}</p>
        <img src={img} alt={nombre} />
        {

        }
        {
          agregarCantidad > 0 ? (<Link to="/cart"> Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} agregar={manejadorCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail