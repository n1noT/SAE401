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
    
    moviesList = data.map((mov) => {
      for(let i = 0; i<mov.category.length; i++){
        if (mov.category[i].id == params.categoryId) {
          let imageBox = '/assets/images/' + mov.urlImage;
  
          return (
            <li key={mov.id} className="block m-1">
              <Link to={'/cinema/' + mov.id}>
                <Card
                  bgImage={imageBox}
                  title={mov.name}
                  channelImage={'/assets/images/logoCanal.webp'}
                  size="small"
                />
                <div className='text-clr-T-base'>
                  <h3>
                    {mov.name}
                  </h3>
                  <h3 className='opacity-50'>
                    {'Film ' + mov.category[0].name}
                  </h3>
                </div>
              </Link>
            </li>
          );
        }
      }
    }
    )

    return (
      <ul className='flex flex-wrap'>
  
        {moviesList}
  
      </ul>
    )
  }

  
}
