import Navbar from '../ui/NavBar'
import { Outlet } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";
import { fetchNavbar} from "../lib/loaders.js";



 

export async function loader(){
  let navbarData = await fetchNavbar('main');

  return {nav: navbarData };
}


export default function Root() {

  const dataName = useLoaderData();



  return (
    <>
      <section className='bg-main-bg min-h-screen'>
        <Navbar nav={dataName.nav}/>
        
        <Outlet />
      </section>
    </>
  );
}
