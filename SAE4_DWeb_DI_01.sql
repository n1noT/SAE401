-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : mysql
-- Généré le : ven. 05 avr. 2024 à 17:00
-- Version du serveur : 8.3.0
-- Version de PHP : 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `SAE4_DWeb_DI_01`
--

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'Action'),
(2, 'Comédie'),
(3, 'Policier'),
(4, 'Fantastique');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20240315102911', '2024-03-18 14:18:00', 407),
('DoctrineMigrations\\Version20240315134656', '2024-03-18 14:18:01', 37),
('DoctrineMigrations\\Version20240325081620', '2024-03-25 08:16:31', 150),
('DoctrineMigrations\\Version20240404160636', '2024-04-04 16:07:19', 141),
('DoctrineMigrations\\Version20240405151145', '2024-04-05 15:12:44', 291),
('DoctrineMigrations\\Version20240405152450', '2024-04-05 15:25:21', 140),
('DoctrineMigrations\\Version20240405153030', '2024-04-05 15:30:51', 411);

-- --------------------------------------------------------

--
-- Structure de la table `movie`
--

CREATE TABLE `movie` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trailer` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `movie`
--

INSERT INTO `movie` (`id`, `name`, `url_image`, `trailer`) VALUES
(2, 'Top Gun : Maverick', 'top_gun_maverick_1920x1080.webp', 'https://www.youtube.com/watch?v=giXco2jaZ_4&pp=ygUXdG9wZ3VuIG1hdmVyaWNrIHRyYWlsZXI%3D'),
(4, 'Yannick', 'yannick_1920x1080.webp', 'https://www.youtube.com/watch?v=v8SKe8bDCSk&pp=ygUPeWFubmljayB0cmFpbGVy'),
(5, 'Les Infiltrés', 'les_infiltres_1920x1080.webp', 'https://www.youtube.com/watch?v=IL9uFwB6yjc&pp=ygUVbGVzIGluZmlsdHJlcyB0cmFpbGVy'),
(6, 'Dark Knight Rises', 'dark_knight_rises_1920x1080.webp', 'https://www.youtube.com/watch?v=g8evyE9TuYk&pp=ygUWZGFyayBrbmhpIHJpc2VzdHJhaWxlcg%3D%3D'),
(7, 'The Dark Knight, le chevalier noir', 'the_dark_knight_1920x1080.webp', 'https://www.youtube.com/watch?v=EXeTwQWrcwY&pp=ygURZGFyayBrbmhpIHRyYWlsZXI%3D'),
(8, 'Batman Begins', 'batman_begins_1920x1080.webp', 'https://www.youtube.com/watch?v=neY2xVmOfUM&pp=ygUTYmF0bWFuIGJlZ2ludHJhaWxlcg%3D%3D'),
(9, 'La Petite Sirène', 'la_petite_sirene_1920x1080.jpg', 'https://www.youtube.com/watch?v=J5VvzJmiqJc&pp=ygUYbGEgcGV0aXRlIHNpcmVuIG50cmFpbGVy'),
(10, 'Sur la piste du Marsupilami', 'sur_la_piste_du_marsupilami_1920x1080.webp', 'https://www.youtube.com/watch?v=XpVndzHUcLA&pp=ygUbc3VyIGxhIHBpc3RlIGR1IG1hciB0cmFpbGVy'),
(11, 'Le contrat', 'le_contrat_1920x1080.webp', 'https://www.youtube.com/watch?v=4Z5EXyT-hGo&pp=ygUTbGUgY29udHJhdCAgdHJhaWxlcg%3D%3D'),
(12, 'The Creator', 'the_creator_1920x1080.webp', 'https://www.youtube.com/watch?v=ex3C1-5Dhb8&pp=ygUUdGhlIGNyZWF0b3IgIHRyYWlsZXI%3D'),
(13, 'Le Challenge', 'le_challenge_1920x1080.webp', 'https://www.youtube.com/watch?v=scrK2xqTJIA&pp=ygUVbGUgY2hhbGxsZW5nZSB0cmFpbGVy'),
(14, 'La soupe aux choux', 'la_soupe_aux_choux_1920x1080.jpg', 'https://www.youtube.com/watch?v=pp1Z9RfA9FY&pp=ygUZbGEgc291cGUgYXV4IGNvdXggdHJhaWxlcg%3D%3D'),
(15, 'Didier', 'didier_1920x1080.webp', 'https://www.youtube.com/watch?v=EOHde8OUhw8&pp=ygUOZGlkaWVyIHRyYWlsZXI%3D'),
(16, 'Au poste !', 'au_poste_1920x1080.webp', 'https://www.youtube.com/watch?v=-Vnz38-CSn4&pp=ygUQYXUgcG9zdGUgdHJhaWxlcg%3D%3D'),
(17, 'Irréductible', 'irreductible_1920x1080.webp', 'https://www.youtube.com/watch?v=ksLmUonyT3o&pp=ygUUaXJyZWR1Y3RpYmxlIHRyYWlsZXI%3D'),
(18, 'Joyeuses Pâques', 'joyeuses_paques_1920x1080.webp', 'https://www.youtube.com/watch?v=9VXqOKKcE3M&pp=ygUYIGpveWV1c2VzIHBhcXVlcyB0cmFpbGVy'),
(19, 'Jackie Brown', 'jackie_brown_1920x1080.webp', 'https://www.youtube.com/watch?v=G7HkBDNZV7s&pp=ygUUamFja2llIGJyb3duIHRyYWlsZXI%3D'),
(20, 'Flic ou Voyou', 'flic_ou_voyou_1920x1080.webp', 'https://www.youtube.com/watch?v=WZaPKltyBf0&pp=ygUVZmxpYyBvdSB2b3lvdSB0cmFpbGVy'),
(21, 'Désigné pour mourir', 'designe_pour_mourir_1920x1080.webp', 'https://www.youtube.com/watch?v=bR0gQGvBoHw&pp=ygUbZGVzaWduZSBwb3VyIG1vdXJpciB0cmFpbGVy'),
(22, 'Le Gitan', 'le_gitan_1920x1080.webp', 'https://www.youtube.com/watch?v=Q-PIxvJLjZc&pp=ygUcbGVzIGluY29ycnVwdGlibGVycyAgdHJhaWxlcg%3D%3D'),
(23, 'Les Incorruptibles', 'les_incorruptibles_1920x1080.webp', 'https://www.youtube.com/watch?v=qQmeh25Rr-k&pp=ygUWc29zIGZhbnRvbWVzIDEgdHJhaWxlcg%3D%3D'),
(24, 'SOS Fantômes', 'sos_fantomes_1920x1080.webp', 'https://www.youtube.com/watch?v=qQmeh25Rr-k&pp=ygUWc29zIGZhbnRvbWVzIDEgdHJhaWxlcg%3D%3D'),
(25, 'Narnia, Chapitre 1', 'narnia_chapitre1_1920x1080.webp', 'https://www.youtube.com/watch?v=usEkWtuNn-w&pp=ygUVbmFybmlhIGNoYXAgMSB0cmFpbGVy'),
(26, 'Aladdin', 'aladdin_1920x1080.webp', 'https://www.youtube.com/watch?v=9g5knnlF7Zo&pp=ygUUYWxsYWRpbiB3aWxsIHRyYWlsZXI%3D');

-- --------------------------------------------------------

--
-- Structure de la table `movie_category`
--

CREATE TABLE `movie_category` (
  `movie_id` int NOT NULL,
  `category_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `movie_category`
--

INSERT INTO `movie_category` (`movie_id`, `category_id`) VALUES
(2, 1),
(4, 2),
(5, 3),
(6, 1),
(6, 4),
(7, 1),
(7, 4),
(8, 1),
(8, 4),
(9, 4),
(10, 2),
(11, 1),
(11, 3),
(12, 1),
(12, 4),
(13, 2),
(14, 2),
(15, 2),
(16, 2),
(17, 2),
(18, 2),
(19, 3),
(20, 3),
(21, 1),
(21, 3),
(22, 3),
(23, 3),
(24, 2),
(24, 4),
(25, 4),
(26, 4);

-- --------------------------------------------------------

--
-- Structure de la table `playlist`
--

CREATE TABLE `playlist` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `movie_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `playlist`
--

INSERT INTO `playlist` (`id`, `user_id`, `movie_id`) VALUES
(1, 12, 16),
(2, 12, 14),
(3, 13, 22),
(4, 13, 16),
(5, 13, 7),
(6, 13, 2),
(13, 13, 8);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`) VALUES
(1, 'george.abitbol@mail.com', '[\"ROLE_USER\", \"ROLE_ADMIN\"]', '$2y$13$/Aoy550Fh3qi7k3CiJc2cefTh3PfhdQG9LbTE.GgMM/tgVTUq3tYW'),
(11, 'nouveau@mail.com', '[]', '$2y$13$tF8yJEPeBOqZCeH3.EvAZu2lJPqxjwM4N1RNB8B4nCvs6oWL79hx2'),
(12, 'amiibo@gmail.com', '[]', '$2y$13$80H.rwKecDL.gToWvakX.Obf0dOi7qcrNsw2DQBSctqGnMFplFKEq'),
(13, 'legostore@gmail.com', '[]', '$2y$13$HDTy8VIwOY6j7VZW1LedCOO/sHq.JMc9kRJaLeEI1NE3vsBclBxgK');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `movie`
--
ALTER TABLE `movie`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `movie_category`
--
ALTER TABLE `movie_category`
  ADD PRIMARY KEY (`movie_id`,`category_id`),
  ADD KEY `IDX_DABA824C8F93B6FC` (`movie_id`),
  ADD KEY `IDX_DABA824C12469DE2` (`category_id`);

--
-- Index pour la table `playlist`
--
ALTER TABLE `playlist`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_D782112DA76ED395` (`user_id`),
  ADD KEY `IDX_D782112D8F93B6FC` (`movie_id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_IDENTIFIER_EMAIL` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `movie`
--
ALTER TABLE `movie`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT pour la table `playlist`
--
ALTER TABLE `playlist`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `movie_category`
--
ALTER TABLE `movie_category`
  ADD CONSTRAINT `FK_DABA824C12469DE2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_DABA824C8F93B6FC` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `playlist`
--
ALTER TABLE `playlist`
  ADD CONSTRAINT `FK_D782112D8F93B6FC` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`),
  ADD CONSTRAINT `FK_D782112DA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
