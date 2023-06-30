import { useState, useEffect } from "react";
import { getProductos, getProductosPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const getPro = idCategoria ? getProductosPorCategoria : getProductos;

    getPro(idCategoria).then((resultado) => setProductos(resultado));
  }, [idCategoria]);

  return (
    <>
      <h2> {props.greeting} </h2>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
