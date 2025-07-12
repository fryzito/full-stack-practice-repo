import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { addMovie} from './store/movies'
import { setType, fetchUsers } from './store/users'

const App = () => {

  const movies = useSelector( (state) => state.movies.list );
  // second part
  const users = useSelector( (state)=> state.users);
  
  const dispatch = useDispatch();

  const [userId, setUserId] = useState(""); // Estado para el input

  return (
    <>
      <h2>
        Movies
      </h2>
      <ul>
        {
          movies ? 
          movies.map( movies => (
              <li key={movies.id}>{movies.title}</li>
            )
          )
          :null
        }
      </ul>
      <hr/>
      <button onClick={() => dispatch(addMovie(
        {id:5,title:'Batman'}
      ))}>
        Add movie
      </button>
      <hr/>

      <h3>Tipo de Usuario:{users.type}</h3>
      <button onClick={() => dispatch(setType('Admin'))}>
        Modificar tipo
      </button>
      <hr />
      <div>
        {users.loading ? 'LOADING':null}
      </div>
      <ul>
        {
          users ? users.users.map(user=>(
            <li key={user.id}>
              {user.name}
            </li>
          ))
          :
          null
        }
      </ul>
      <button onClick={()=>dispatch(fetchUsers())}>
        Obtener Usuarios
      </button>

      <hr />
       <div>
        {users.loading ? 'LOADING':null}
      </div>
      <ul>
        {
          users.user ? users.user.map(user=>(
            <li key={user.id}>
              {user.name}
            </li>
          ))
          :
          null
        }
      </ul>
      <input
        type="number"
        placeholder="Ingresar ID de usuario"
        value={userId}
        onChange={e => setUserId(e.target.value)}
      />
      <button onClick={() => dispatch(fetchUsers(userId))}>
        Obtener Usuario por ID
      </button>
      
    </>
  )
}

export default App
