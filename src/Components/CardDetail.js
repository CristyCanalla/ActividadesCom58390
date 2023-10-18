import React from 'react'

const CardDetail = ({character, onClose}) => {
  return (
    <div>
       <h2>Detalle del personaje</h2>
       <img src={character.image} alt={character.name}/>
       <p>Nombre: {character.name}</p> 
       <p>Descripción:{character.species} - {character.gender} - {character.location.name}</p> 
       <button onClick={onClose}>Cerrar</button>
    </div>
  )
}

export default CardDetail