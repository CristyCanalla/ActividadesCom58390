import React from 'react'
import '../Components/PerfilCard.css';


function PerfilCard({nombre, edad, cargo, imagen}) {

  
  return (
    <div className='perfil-card'>
    <img src={imagen} alt='img' className='perfil-img'/>
    <h2 className='perfil-titulo'>Nombre: {nombre} </h2>
    <p className='perfil-detalle'>
    <span className='perfil-etiqueta'>Edad: {edad} años </span> 
    </p>
    <p className='perfil-detalle'>
    <span className='perfil-etiqueta'>Profesión: {cargo} </span> 
    </p>
    </div>
  )
}

export default PerfilCard