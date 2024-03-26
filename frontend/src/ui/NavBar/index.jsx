import {Link} from 'react-router-dom';
import NavButton from './Button';


export default function NavBar({nav}) {
  let navElements = nav.map((elt) => {
    // console.log(index);
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
        <Link className="hover:text-[#BBA] focus:text-[#BB0]" to="/design-system">Design System</Link>     
    </div>

</nav>
    );

}

