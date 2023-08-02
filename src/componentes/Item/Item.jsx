import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img, stock}) => {
  return (
    <div className='card-producto'>
        <img className='imagen-producto' src={img} alt={nombre} />
        <h3> {nombre} </h3>
        <p>${precio} </p>
        <p>ID: {id} </p>
        <p>Stock: {stock}  </p>
        <Link className='link-producto' to={`/item/${id}`} > Detalles del producto </Link>
        
    </div>
  )
}

export default Item