import Navbar from '../ui/NavBar'
import { Outlet } from 'react-router-dom';


export default function Root() {

  return (
    <>
      <section>
        <Navbar/>
        <Outlet />
      </section>
    </>
  );
}
