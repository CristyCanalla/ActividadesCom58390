import React, {useState} from 'react'
import CardDetail from './CardDetail'

const Card = ({character}) => {

  const [showDetail, setShowDetail] = useState(false);


  const openDetail = () =>{
    setShowDetail(true);
  }

  const closeDetail = () =>{
    setShowDetail(false);
  }

  return (
    <div>
        <img src={character.image} alt={character.name}/>
        <h2>{character.name}</h2>
        <p>Haz click para mayor info</p>
        <button onClick={openDetail}>👉 Click</button>
    {showDetail && <CardDetail character={character} onClose={closeDetail}/>}
    </div>
  )
}

export default Card