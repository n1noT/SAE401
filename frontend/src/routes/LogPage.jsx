import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
// import { fetchUser } from "../lib/loaders.js";

/*
export async function loader(){
  let cookie = await fetchUser();
  console.log('loader')
  console.log(cookie);
  return !!cookie
}
*/

export default function LogPage() {

  function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(name + '=') === 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return null;
    }

    let userId = getCookie('user_id');

    console.log(userId)
  
    return(
      <h3 className='text-3xl text-clr-T-base'>{userId}</h3>
    )
  
};


