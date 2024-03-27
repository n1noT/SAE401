import Card from '../ui/CardMovie';
import { useLoaderData } from "react-router-dom";
import { fetchCategoryData} from "../lib/loaders.js";
import { Link } from 'react-router-dom';

export async function loader({params}){
  let moviesData = await fetchCategoryData(params.categoryName);

    return moviesData;
  }
  
  export default function Genre({data}) {
      let moviesList = data.movies.map((mov) => {
          let imageBox = '/assets/images/'+mov.urlImage;
          
          return (
            <li key={mov.id} className="w-1/4 block m-1">
              <Link to={'/cinema/'+ mov.id}>
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
        
      )
        
      
    
    return (
      <ul>
        
        {moviesList}

      </ul>
    )
  }
