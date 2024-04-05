<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use App\Entity\Movie;
use App\Entity\Category;
use App\Repository\CategoryRepository;
use App\Repository\MovieRepository;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Cookie;
use App\Entity\User;
use App\Entity\Playlist;
use App\Repository\PlaylistRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class ApiController extends AbstractController
{
    

    #[Route('/api/movies', name: 'app_api_all_movies', methods:['GET'])]
    public function readAllMovies(MovieRepository $mov, SerializerInterface $serializer ): Response
    {

        $data = $serializer->normalize($mov->findAll(), null, ['groups' => 'json_movie']);

        $response = new JsonResponse( $data );
        
        return $response;
    }

    #[Route('/api/movies/searchContent', name: 'app_api_search_movie', methods:['GET'])]
    public function search(Request $request, MovieRepository $mov, SerializerInterface $serializer ): Response
    {
        
        $search = $request->query->get('search');

        $data = $serializer->normalize($mov->findLike($search), null, ['groups' => 'json_movie']);
        
        
        
        $response = new JsonResponse( $data );
       

        return $response;
    }

     #[Route('/api/movie/{id}', name: 'app_api_movie', methods:['GET'], requirements: ['id' => '\d+'])]
     public function readMovie( Movie $mov, SerializerInterface $serializer ): Response
     {

    
       
        $data = $serializer->normalize($mov, null, ['groups' => 'json_movie']);
    
        $response = new JsonResponse( $data );
        return $response;
        
        
     }

    

    #[Route('/api/category/{id}', name: 'app_api_category', methods:['GET'])]
    public function readCategory(Category $cat, SerializerInterface $serializer ): Response
    {
    
        $data = $serializer->normalize($cat, null, ['groups' => 'json_category']);
        
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/categories', name: 'app_api_category', methods:['GET'])]
    public function readAllCategory(CategoryRepository $cat, SerializerInterface $serializer ): Response
    {
        
        $data = $serializer->normalize($cat->findAll(), null, ['groups' => 'json_category']);
        
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/user_logged', name: 'app_api_user', methods:['GET'])]
    public function user_logged(): Response
    {
        $user = $this->getUser();

        // Créer un nouveau cookie
        $cookie = new Cookie(
            'user_id',          // Nom du cookie
            $user,     // Valeur du cookie, ici j'ai supposé que vous avez une méthode getId() sur votre entité User
            time() + 3600 * 24 *7, // Date d'expiration du cookie (ici, 24 heures)
            '/',                // Chemin du cookie (racine du site dans ce cas)
            null,               // Domaine du cookie (null pour le domaine actuel)
            false,              // Secure (true si vous souhaitez que le cookie soit transmis uniquement via HTTPS)
            false                // HttpOnly (true si vous ne voulez pas que JavaScript puisse accéder au cookie)
        );

        $response = new Response();
        $response->headers->setCookie($cookie);
       
        
        return $response;
    }

    #[Route('/api/playlist', name: 'app_api_playlist', methods:['GET'])]
    public function readPlaylist(#[CurrentUser] ?User $user, PlaylistRepository $play, SerializerInterface $serializer ): Response
    {
        $userId = $user->getId();
        $data = $serializer->normalize($play->findByUserId($userId), null, ['groups' => 'json_movie']);

        $response = new JsonResponse( $data );
        return $response;
       
        
    }

    #[Route('/api/playlist/add/{id}', name: 'app_api_playlist_add', requirements: ['id' => '\d+'])]
    public function addPlaylist(#[CurrentUser] ?User $user, Movie $mov ,EntityManagerInterface $entityManager, PlaylistRepository $play): Response
    {
        // Vérifie si l'utilisateur est connecté
        if (!$user) {
            return new Response('Unauthorized', Response::HTTP_UNAUTHORIZED);
        }

        $check = $play->findByUserAndMovie($user->getId(), $mov->getId());

        if($check == null){
            // Crée une nouvelle entrée dans la table Playlist avec les ID de l'utilisateur et du film
            $playlistEntry = new Playlist();
            $playlistEntry->setUser($user);
            $playlistEntry->setMovie($mov);

            // Persiste l'entité Playlist
            $entityManager->persist($playlistEntry);

            // Enregistre les modifications dans la base de données
            $entityManager->flush();

            // Répond avec un message de succès
            return new Response('Film ajouté à la playlist avec succès', Response::HTTP_OK);
        }
        else{
            return new Response('Le film est déjà dans la playlist ', Response::HTTP_OK);
        }

        
    }

    
  

    

    


}
