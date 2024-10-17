# SAE Starter
Ce repository a pour but de fournir une base pour un environnement Docker local pour la SAE4.DWeb-DI.01.

## Installation

Il faut ensuite exécuter ces commandes :
```
# Installe les dépendances pour le frontend
docker-compose run --rm frontend npm install 
docker-compose run --rm frontend npm install react-grid-carousel --force

# Installe les dépendances pour le backend
docker-compose run --rm backend composer install

```

## Lancer l'environnement
```
docker-compose up -d
```

## Liens
- Frontend : [http://localhost:8090](http://localhost:8090)
- Backend : [http://localhost:8080](http://localhost:8080)
- phpMyAdmin : [http://localhost:8788](http://localhost:8070)
