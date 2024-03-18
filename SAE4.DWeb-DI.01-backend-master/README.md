# SAE Starter
Ce repository a pour but de fournir une base pour un environnement Docker local pour la SAE4.DWeb-DI.01.

## Installation
Déplacer le code de votre application frontend dans un dossier `frontend`.
Faites de même avec votre application Symfony dans un dossier `backend`.

Il faut ensuite exécuter ces commandes :
```
# Installe les dépendances pour le frontend
docker-compose run --rm frontend npm install

# Installe les dépendances pour le backend
docker-compose run --rm backend composer install

# Crée la base de données et lance les migrations
docker-compose run --rm backend php bin/console doctrine:database:create
docker-compose run --rm backend php bin/console doctrine:migrations:migrate --no-interaction
```

## Lancer l'environnement
```
docker-compose up -d
```

## Liens
- Frontend : [http://localhost:8090](http://localhost:8090)
- Backend : [http://localhost:8080](http://localhost:8080)
- phpMyAdmin : [http://localhost:8070](http://localhost:8070)
