import React, {useState, useEffect} from 'react'

const Actividad = () => {

   const [products, setProducts] = useState([]);


   useEffect(()=>{
    async function fetchProducts(){
      try{
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=producto');
        if(response.ok){
            const data = await response.json();
            const firtsTenProducts = data.results.slice(0,10);
            setProducts(firtsTenProducts);
        }else{
            console.error('error al cargar los productos');
        }
     } catch(error){
            console.error('Error al cargar los productos', error);
        }   
    }
    fetchProducts();
   }, [])


  return (
    <div>
        <h2>Productos de Mercado Libre</h2>
        <ul>
        {products.map((p)=>(
            <li key={p.id}>
                {p.title}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default Actividad