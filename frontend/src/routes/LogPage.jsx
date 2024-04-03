import { useState } from "react";

export default function LogPage (){
    const [state, setState] = {username: '', password: ''}
    
      handleChange = (event) => {
        setState({ [event.target.name]: event.target.value });
      }
    
      handleSubmit = async (event) => {
        event.preventDefault();
        const { username, password } = state;
        try {
          const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
          });
          const data = await response.json();
          // Stocker le jeton JWT dans le stockage local ou les cookies
          localStorage.setItem('token', data.token);
          // Rediriger l'utilisateur vers une page protégée ou actualiser la page
          window.location.reload();
        } catch (error) {
          console.error('Erreur de connexion:', error);
        }
      }
    
    
    return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
            <button type="submit">Se connecter</button>
        </form>
    );
      
}
