import { useSelector, useDispatch } from "react-redux"
import { addMovie} from './store/movies'
import { setType, fetchUsers } from './store/users'

const App = () => {

  const movies = useSelector( (state) => state.movies.list );
  // second part
  const users = useSelector( (state)=> state.users);
  const dispatch = useDispatch();

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
      <button onClick={()=>dispatch(fetchUsers())}>
        Obtener Usuarios
      </button>

    </>
  )
}

export default App
