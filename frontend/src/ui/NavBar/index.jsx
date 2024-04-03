import SearchBar from '../SearchBar';
import NavButton from './Button';
import Button from '../Button';
import {Link} from 'react-router-dom'


export default function NavBar({nav}) {
  let navElements = nav.map((elt) => {
 
    return (
      <li className='h-min'>
        <NavButton
          link={elt.link}
          intent={elt.intent}
          name={elt.name}
        />
      </li>
    );
  });

  return (

<nav className="flex border-b-2 border-button-secondary-bg w-full px-4 justify-between">
  <div className='flex'>
    <Link to="/" className='flex justify-center items-center'>
      <img src="/assets/images/big_logo_canal.svg" className='w-32 object-contain '/>
    </Link>
    <ul className="flex mx-4 h-fit justify-between w-full max-w-bar">
        {navElements}
      </ul>
  </div>
    <div className="flex justify-center items-center p-2 gap-4" >
        <SearchBar/>    

        <Link to="http://localhost:8080/register">
          <Button intent="primary" size="small" className="rounded-sm">
            <span>S'abonner</span>
          </Button>
        </Link> 
        <Link to="http://localhost:8080/login">
          <button className='w-8 h-8 bg-login-bg p-2 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.1 0 19.244 17.172">
              <path d="M7.522.001a4.496 4.496 0 1 1 .001 8.995A4.496 4.496 0 0 1 7.522 0m-8.565 17.172c-.88 0-1.364-1.004-.841-1.712 2.13-2.88 5.547-4.753 9.406-4.753s7.275 1.872 9.406 4.753c.523.708.04 1.712-.841 1.712z"></path>
              </svg>
          </button>
        </Link> 
    </div>

</nav>
    );

}

