import Personaje from './Personaje';
import {useState} from 'react';

const PersonajesContainer = () =>{

    const [persona, setPersona] = useState(
        [
            {
              id: 1,
              name: 'Homero',
              job: 'Inspector de seguridad sector 7-G',
              img: 'https://cdn.milenio.com/uploads/media/2020/08/06/homero-trabaja-en-la-planta.jpeg',
            },
            {
              id: 2,
              name: 'Clancy',
              job: 'Jefe del departamento de policia',
              img: 'https://www.clarin.com/img/2021/07/12/DuUrPjLgV_360x240__1.jpg',
            },
            {
              id: 3,
              name: 'Stuart',
              job: 'musico',
              img: 'https://3.bp.blogspot.com/-SV3l6-1OEvU/W_SC_eXk-WI/AAAAAAAAfy0/H61QtIITdYkM6YTNIPMCZLT9xoSoEki-QCLcBGAs/s1600/simpsonsworld_social_og_disco_1200x1200.jpg',
            },
            {
              id: 4,
              name: 'Ned',
              job: 'Comerciante',
              img: 'https://e1.pxfuel.com/desktop-wallpaper/476/1014/desktop-wallpaper-ned-flanders-thumbnail.jpg',
            },
          ]);
    
    return(
    <div className='col.lg-4'>
     {persona.map((p)=>{
        return(
            <div>
                <h2>Hola soy un personaje 👋</h2>
             <Personaje 
             key={p.id}
             name={p.name}
             job={p.job}
             img={p.img}
             />
            </div>
        )
     })}
    </div>
    )
}
export default PersonajesContainer;