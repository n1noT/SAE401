import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { moviesContext } from '../context/moviesContext';
import GridMovie from '../ui/GridMovie';

export default function Genre() {

  let data = useContext(moviesContext);
  let params = useParams()

  let moviesList = []

  if (params.categoryId == 'tous-les-films') {
    return (
      <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-4 gap-y-6'>
        <GridMovie data={data} />

      </ul>
    )


  }
  else {
    let dataMovie = []

    moviesList = data.map((mov) => {
      for (let i = 0; i < mov.category.length; i++) {
        if (mov.category[i].id == params.categoryId) {
          dataMovie.push(mov);
        }
      }
    }
    )

    return (
      <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-4 gap-y-6'>
        <GridMovie data={dataMovie} />

      </ul>
    )
  }


}
