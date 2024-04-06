import React from 'react';
import { Link} from 'react-router-dom';
import { getCookie } from '../lib/utils';
import Button from '../ui/Button';

export default function LogPage() {

    let userName = getCookie('email')

    return(
      <div className='flex justify-center items-center h-96 flex-col gap-8'>
        <h3 className='text-3xl text-clr-T-base text-center'>Bienvenue sur Canal+ {userName} !</h3>
        <Link to="/cinema/accueil" className='w-56'>
          <Button intent="secondary">
            <span>Revenir à l'accueil</span>
          </Button>
        </Link>
      </div>
    )
  
};


