import Navbar from '../ui/NavBar'
import { Outlet } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";
import { fetchNavbar, fetchAllMoviesData, fetchAllCategoriesData } from "../lib/loaders.js";



 

export async function loader(){
  let moviesData = await fetchAllMoviesData();
  let catData = await fetchAllCategoriesData();
  let navbarData = await fetchNavbar('main');

  return {movies : moviesData, categories : catData, nav: navbarData};
}


export default function Root() {

  const data = useLoaderData();



  return (
    <>
      <section className='bg-main-bg'>
        <Navbar nav={data.nav}/>
        <Outlet {...data}/>
      </section>
    </>
  );
}
