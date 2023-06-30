import './Item.css'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='card-producto'>
        <img className='imagen-producto' src={img} alt={nombre} />
        <h3>{nombre} </h3>
        <p>${precio} </p>
        <p>ID: {id} </p>
        <Link className='link-producto' to={`/item/${id}`} > Detalles del producto </Link>
        <ItemCount></ItemCount>
    </div>
  )
}

export default Item