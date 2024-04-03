import Card from '../ui/CardMovie';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { moviesContext } from '../context/moviesContext';
import GridMovie from '../ui/GridMovie';




export default function Genre() {


  let data = useContext(moviesContext);

  let params = useParams()

  let moviesList = []

  if (params.categoryId == 'tous-les-films') {
    return (
      <ul className='flex flex-wrap'>
  
        <GridMovie data={data}/>
  
      </ul>
    )


  }
  else {
    let dataMovie = []
    
    moviesList = data.map((mov) => {
      for(let i = 0; i<mov.category.length; i++){
        if (mov.category[i].id == params.categoryId) {
          dataMovie.push(mov);
        }
      }
    }
    )

    return (
      <ul className='flex flex-wrap'>
  
        <GridMovie data={dataMovie}/>
  
      </ul>
    )
  }

  
}
