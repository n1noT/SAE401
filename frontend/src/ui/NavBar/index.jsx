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
    </div>

</nav>
    );

}

