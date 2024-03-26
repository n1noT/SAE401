import Card from '../ui/CardMovie';
import { useLoaderData } from "react-router-dom";
import { fetchAllMoviesData, fetchAllCategoriesData } from "../lib/loaders.js";
import { Link } from 'react-router-dom';

export async function loader(){
    let moviesData = await fetchAllMoviesData();
    let catData = await fetchAllCategoriesData();
    return {movies : moviesData, categories : catData};
  }
  
  export default function Cinema() {

    const data = useLoaderData();

    let categoryList = [];
    for (let category of data.categories){
      
      let moviesList = data.movies.map((mov) => {
        
        if(category.name ==  mov.category[0].name){
          let imageBox = './assets/images/'+mov.urlImage;
          
          return (
            <li key={mov.id} className="w-1/4 block m-1">
              <Link to={'/cinema/'+ mov.id}>
                <Card
                  bgImage={imageBox}
                  title={mov.name}
                  channelImage={'./assets/images/logoCanal.webp'}
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
        
      )
        
      categoryList.push(
          <li className='mt-8 '>
            <h3 className='text-clr-T-base font-button-secondary text-2xl'>{category.name}</h3>
            <ul className="flex ">
                {moviesList}
            </ul>
          </li>
      )
    }
    
    return (
      <ul>
        {categoryList}

      </ul>
    )
  }
