import { useContext } from 'react';
import { moviesContext } from '../context/moviesContext';
import { categoriesContext } from '../context/categoriesContext';
import ListedMovies from '../ui/ListedMovies';

export default function Genre() {
    
  const data = {movies : useContext(moviesContext), categories : useContext(categoriesContext)};
   
  return (
    <ul className='flex'>
      <ListedMovies data={data}/>

    </ul>
  )
}
