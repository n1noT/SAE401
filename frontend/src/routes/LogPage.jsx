import React, { useState } from 'react';
import axios from 'axios';

export default function LogPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', { username, password });
      const { token } = response.data; // Extraction du jeton JWT de la réponse
      // Stockage du jeton JWT dans le localStorage ou un cookie
      localStorage.setItem('jwtToken', token);
      // Redirection vers une autre page ou mise à jour de l'état de l'application
      // Par exemple : history.push('/dashboard');
    } catch (error) {
      setError('Identifiants invalides');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Se connecter</button>
      {error && <p>{error}</p>}
    </form>
  );
};


