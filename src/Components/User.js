import {useState, useEffect} from 'react'

const User = () => {
 
    const [users, setUsers] = useState([]);

    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=> response.json())
    .then((data) => setUsers(data));

    }, [])

  return (
    <div>
    <h2>Los usuarios son:</h2>
    <ul>

    {users.map((u)=>(
        <li key={u.id}> {u.id} {u.name} </li>
    ))}
    
    </ul>
    </div>
  )
}

export default User