import SearchBar from '../SearchBar';
import NavButton from './Button';
import Button from '../Button';
import {Link} from 'react-router-dom'
import { getCookie } from '../../lib/utils';
import Playlist from '../../routes/Playlist';




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

  let cookie = getCookie('user_id')

  let titleConnex= '';
  let linkButton = '';
  let fillButton = '';
  let maPlaylistLink = null

  if(cookie){  
    titleConnex= 'Compte Canal+';
    linkButton = 'logout';
    fillButton =  'Se déconnecter';
    maPlaylistLink = (
      <Link to="http://localhost:8090/playlist">
        <Button intent="secondary" className="rounded-sm">
          <span>Ma playlist</span>
        </Button>
      </Link>
    );
  }
  else{
    titleConnex= 'Bienvenue sur Canal+';
    linkButton = 'login';
    fillButton = 'Se connecter';
    
  }

  return (

<nav className="flex border-b-2 border-button-secondary-bg w-full p-1 md:px-4 justify-between flex-col md:flex-row">
  <div className='flex'>
    <Link to="/" className='flex justify-center items-center'>
      <img src="/assets/images/big_logo_canal.svg" className='w-32 object-contain '/>
    </Link>
    <ul className="flex mx-4 h-fit justify-between w-full max-w-bar">
        {navElements}
      </ul>
  </div>
    <div className="flex gap-2 justify-center items-center md:p-2 md:gap-4" >
        <SearchBar/>    

        <Link to="http://localhost:8080/register">
          <Button intent="primary" size="small" className="rounded-sm">
            <span>S'abonner</span>
          </Button>
        </Link> 
        
          <div className='min-w-8 h-8 bg-login-bg p-2 rounded-full group relative z-50'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2.1 0 19.244 17.172" >
              <path d="M7.522.001a4.496 4.496 0 1 1 .001 8.995A4.496 4.496 0 0 1 7.522 0m-8.565 17.172c-.88 0-1.364-1.004-.841-1.712 2.13-2.88 5.547-4.753 9.406-4.753s7.275 1.872 9.406 4.753c.523.708.04 1.712-.841 1.712z" ></path>
              </svg>
              <div className='absolute top-6 group-hover:inline-block hidden right-0 '>
                <div className='p-5 pr-0'>
                  <div className=' bg-secondary-bg w-56 flex justify-center items-center p-4 rounded-md flex-col gap-2'>
                    <h3 className='font-button-secondary text-clr-T-base'>{titleConnex}</h3>
                      <Link to={"http://localhost:8080/" + linkButton}>
                          <Button intent="primary" className="rounded-sm">
                            <span>{fillButton}</span>
                          </Button>
                      </Link> 
                      {maPlaylistLink}
                    
                  </div>
                </div>
                
                
              </div>
          </div>
        
    </div>

</nav>
    );

}

