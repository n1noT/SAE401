import React, { useState } from 'react';
import axios from 'axios';

export default function LogPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const form = new FormData(document.getElementById("login-form"));
      console.log(form)
      let answer = await fetch("http://localhost:8080/login", {
        method: "GET",
        
      });
      console.log(answer)
      const { token } = response.data; // Extraction du jeton JWT de la réponse
      // Stockage du jeton JWT dans le localStorage ou un cookie
      // localStorage.setItem('jwtToken', token);
      // Redirection vers une autre page ou mise à jour de l'état de l'application
      // Par exemple : history.push('/dashboard');
    } catch (error) {
      setError('Identifiants invalides');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col w-36 gap-4' id="login-form">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className='bg-button-bg'>Se connecter</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};


