import SearchBar from '../SearchBar';
import NavButton from './Button';


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

<nav className="flex border-b-2 border-button-secondary-bg w-full">

    <ul className="flex mx-4 h-fit justify-between w-full max-w-bar">
        {navElements}
      </ul>
    <div className="flex justify-center items-center p-2" >
        <SearchBar/>    
    </div>

</nav>
    );

}

