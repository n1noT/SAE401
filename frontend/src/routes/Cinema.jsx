
import NavButton from '../ui/NavBar/Button.jsx';
import { Outlet, useLoaderData } from "react-router-dom";
import { fetchAllMoviesData, fetchAllCategoriesData, fetchNavbar} from "../lib/loaders.js";

import {moviesContext}  from '../context/moviesContext.jsx';
import {categoriesContext}  from '../context/categoriesContext.jsx';



export async function loader(){
     let moviesData = await fetchAllMoviesData();
     let catData = await fetchAllCategoriesData();

     return {movies : moviesData, categories : catData};
}
  
  export default function Cinema() {
    
    const data = useLoaderData()
  
    let categoryNav = [];

    categoryNav.push(
      <li>
        <NavButton link={'/cinema/genre/tous-les-films'} intent='secondary' name={'Tous Les Films'}></NavButton>
      </li>
    )

    for (let category of data.categories){

      categoryNav.push(
        <li>
          <NavButton link={'/cinema/genre/' + category.id} intent='secondary' name={category.name}></NavButton>
        </li>
      )
    }
    
    return (
      <>
        <categoriesContext.Provider value={data.categories}>
          <moviesContext.Provider value={data.movies}>
              <div>
                <h2 className='text-clr-T-base font-button-secondary text-4xl'>Cinéma</h2>
                <ul className='flex'>
                  {categoryNav}
                </ul>     

              </div>
              <Outlet/>
          </moviesContext.Provider>
        </categoriesContext.Provider>
      </>
      
    )
  }
