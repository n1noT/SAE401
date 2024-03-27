import Card from '../ui/CardMovie';
import NavButton from '../ui/NavBar/Button.jsx';
import { useLoaderData } from "react-router-dom";
import { fetchAllMoviesData, fetchAllCategoriesData, fetchNavbar} from "../lib/loaders.js";
import { Link } from 'react-router-dom';

export async function loader(){
    let moviesData = await fetchAllMoviesData();
    let catData = await fetchAllCategoriesData();
    let navData = await fetchNavbar('cinema');

    return {movies : moviesData, categories : catData, nav : navData };
  }
  
  export default function Cinema() {

    const data = useLoaderData();

    let categoryList = [];
    let categoryNav = [];

    for (let category of data.categories){
      
      let moviesList = data.movies.map((mov) => {
        for(let i = 0; i< mov.category.length; i++){
          if(category.name ==  mov.category[i].name){
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

      categoryNav.push(
        <li>
          <NavButton link={'/cinema/genre/' + category.id} intent='secondary' name={category.name}></NavButton>
        </li>
      )
    }
    
    return (
      <ul>
        <h2 className='text-clr-T-base font-button-secondary text-4xl'>Cinéma</h2>
        <ul className='flex'>
          {categoryNav}
        </ul>
        {categoryList}

      </ul>
    )
  }
