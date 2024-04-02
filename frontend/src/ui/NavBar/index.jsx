import SearchBar from '../SearchBar';
import NavButton from './Button';


export default function NavBar({nav}) {
  let navElements = nav.map((elt) => {
 
    return (
      <li >
        <NavButton
          link={elt.link}
          intent={elt.intent}
          name={elt.name}
        />
      </li>
    );
  });

  return (

<nav className="flex">

    <ul className="flex mx-4">
        {navElements}
      </ul>
    <div className="">
        <SearchBar/>    
    </div>

</nav>
    );

}

