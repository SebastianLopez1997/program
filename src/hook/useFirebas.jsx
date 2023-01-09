import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { async } from "@firebase/util";

const useFirebas = () => {
  const [productos, setProductos] = useState([]);
  const [producto,setProducto] = useState(null)
  
  
  useEffect(() => {
    getProductos()
    
    return () => {
      
    }
  }, [])
  
  
  
useEffect(() => {
  
}, [productos])

  const getProductos = async () => {
    try {
      const prodCol = collection(db, "Productos");
      await getDocs(prodCol).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("Base de datos vacio");
        }
        setProductos(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      });
    } catch (error) {}
  };


  const getProduct = async (id) => {
    try {
      const document = doc (db, 'Productos' ,id)
      const response = await getDoc (document)
      setProducto({id:response.id, ...response.data})
    } catch (error ) {
      console.log('error')
    }
  
  }


  return {productos,
         getProductos,
         getProduct,
         producto};
};

export default useFirebas;
