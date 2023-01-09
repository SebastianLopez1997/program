import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFirebas from '../hook/useFirebas'

const ItemDetail = () => {

  const {id} = useParams()
  const {producto,getProduct} = useFirebas()
  console.log(producto)
  console.log(id)
  
  useEffect(() => {
    getProduct(id)
    
    if (producto)
    {
      console.log(producto)
    }
    return () => {
      
    }
  }, [])
  

  return (
    <div>
    <h1>div</h1>
      {producto ? (
        <>
          <h1>{producto.id}</h1>
          <h1>{producto.stock}</h1>
        </>
      ): <h1>Cargando...</h1>}
    </div>
  )
}

export default ItemDetail