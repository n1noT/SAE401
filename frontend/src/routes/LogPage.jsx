import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
// import { fetchUser } from "../lib/loaders.js";
import { getCookie } from '../lib/utils';
import Button from '../ui/Button';

/*
export async function loader(){
  let cookie = await fetchUser();
  console.log('loader')
  console.log(cookie);
  return !!cookie
}
*/

export default function LogPage() {

  
    let userName = getCookie('user_email')

    return(
      <div className='flex justify-center items-center h-96 flex-col gap-8'>
        <h3 className='text-3xl text-clr-T-base'>Bienvenue sur Canal+ {userName} !</h3>
        <Link to="/cinema/accueil" className='w-56'>
          <Button intent="secondary">
            <span>Revenir à l'accueil</span>
          </Button>
        </Link>
      </div>
    )
  
};


