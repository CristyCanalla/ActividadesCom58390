import React, {useState, useEffect} from 'react'
import Card from './Card';

const CardContainer = () => {

   const [personaje, setPersonaje] = useState([]);


   useEffect(()=>{
    async function getPersonajes(){
      try{
        const response = await fetch('https://rickandmortyapi.com/api/character');
        if(response.ok){
            const data = await response.json();
            setPersonaje(data.results);
        }else{
            console.error('error al cargar los personajes');
        }
     } catch(error){
            console.error('Error al cargar los personajes', error);
        }   
    }
    getPersonajes();
   }, [])


  return (
    <div>
        <h2>Personajes Rick and Morty</h2>
        {personaje ? (personaje.map((p)=>
        <Card key={p.id} character={p}/>))
        : (<p>Cargando personaje....</p>)
    }
        
    </div>
  )
}

export default CardContainer