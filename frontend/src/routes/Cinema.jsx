import Card from '../ui/CardMovie';
import NavButton from '../ui/NavBar/Button.jsx';
import { useLoaderData } from "react-router-dom";
import { fetchAllMoviesData, fetchAllCategoriesData, fetchNavbar} from "../lib/loaders.js";
import { Link } from 'react-router-dom';
import Genre  from '../routes/Genre.jsx';

// export async function loader(){
//     let moviesData = await fetchAllMoviesData();
//     let catData = await fetchAllCategoriesData();


//     return {movies : moviesData, categories : catData};
// }
  
  export default function Cinema({data}) {

    // const data = useLoaderData();

    console.log(data)
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
      <>
        <ul>
        <h2 className='text-clr-T-base font-button-secondary text-4xl'>Cinéma</h2>
        <ul className='flex'>
          {categoryNav}
        </ul>
        {categoryList}

      </ul>
      <Genre data={data}/>
      </>
      
    )
  }
