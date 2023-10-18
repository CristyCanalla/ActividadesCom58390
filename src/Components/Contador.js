import {useState} from 'react'

const Contador = () => {

  const [contador, setContador] = useState(0);
  
  console.log(`El contador va por: ${contador}`);
  console.log('El componente se renderizo');

  return (
    <div>
     <button onClick={()=> setContador(contador + 1)}> Sumar </button>
     <h3>{contador}</h3>
     <button onClick={()=> setContador(contador - 1)}> Restar </button>
    </div>
  )
}

export default Contador