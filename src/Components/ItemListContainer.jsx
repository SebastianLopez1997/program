import React, { useEffect } from "react";
import useFirebas from "../hook/useFirebas";
import { Link } from "react-router-dom";

const ItemListContainer = () => {
  const { productos } = useFirebas();
  useEffect(() => {}, [productos]);

  return (
    <div>
      <h1>ItemListContainer</h1>
      {productos.map(({ id, nombre }) => (
        <Link key={id} to={`/itemDetail/${id}`}>
          <h1>{nombre}</h1>
        </Link>
      ))}
    </div>
  );
};

export default ItemListContainer;
