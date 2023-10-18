import {useRef} from 'react'

const ContRef = () => {

    const contador = useRef(0);


  const handleClick = (condicion) =>{
    if(condicion){
      contador.current++;
    } else{
        contador.current--;
    }
    console.log(`El contador va por: ${contador.current}`);
  }
  
  console.log('El componente se renderizo');

  return (

    <div>
     
     <button onClick={()=> handleClick(true) }> Sumar </button>
     <h3>{contador.current}</h3>
     <button onClick={()=> handleClick(false)}> Restar </button>
    </div>
  )
}

export default ContRef