import Navbar from '../ui/NavBar'
import { Outlet } from 'react-router-dom';
import { useLoaderData } from "react-router-dom";
import { fetchNavbar } from "../lib/loaders.js";



export async function loader({navbarName}){
  const navbarData = await fetchNavbar(navbarName);
  
  return navbarData;
}   


export default function Root() {

  const navbar = useLoaderData();


  return (
    <>
      <section className='bg-main-bg h-screen'>
        <Navbar nav={navbar}/>
        <Outlet />
      </section>
    </>
  );
}
