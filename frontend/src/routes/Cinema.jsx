
import NavButton from '../ui/NavBar/Button.jsx';
import Loading from '../ui/Loading';
import { Outlet, useLoaderData, defer, Await } from "react-router-dom";
import { fetchAllMoviesData, fetchAllCategoriesData, fetchNavbar} from "../lib/loaders.js";

import {moviesContext}  from '../context/moviesContext.jsx';
import {categoriesContext}  from '../context/categoriesContext.jsx';
import { Suspense } from 'react';



export async function loader(){
     let moviesData = await fetchAllMoviesData();
     let catData = await fetchAllCategoriesData();

     return defer({movies : moviesData, categories : catData});
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

      <Suspense fallback={<Loading/>}>
        <categoriesContext.Provider value={data.categories}>
          <moviesContext.Provider value={data.movies}>
              <section className='p-2 md:p-8'>
                <h2 className='text-clr-T-base font-button-secondary text-4xl mt-4 p-2 font-bold'>Cinéma</h2>
                <ul className='flex overflow-hidden w-full'>
                  {categoryNav}
                </ul>     

                <Outlet/>
              </section>
          </moviesContext.Provider>
        </categoriesContext.Provider>
        </Suspense>
      </>
      
    )
  }
