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


class ApiController extends AbstractController
{
    

    #[Route('/api/movies', name: 'app_api_all_movies', methods:['GET'])]
    public function readAllMovies(MovieRepository $mov, SerializerInterface $serializer ): Response
    {
        // $serializer est un service de Symfony injecté dans la méthode readMovie
        // $data est la représentation serialisée/normalisée de l'entity $mov
        // $data = $serializer->normalize(, null, ['groups' => 'json_movie']);
        // $response est une instance de JsonResponse qui hérite de Response
        // C'est la classe à utiliser lorsque l'on veut retourner du JSON
        // $data sera automatiquement encodé en JSON

        $data = $serializer->normalize($mov->findAll(), null, ['groups' => 'json_movie']);

        $response = new JsonResponse( $data );
        
        return $response;
    }

    #[Route('/api/movies/searchContent', name: 'app_api_search_movie', methods:['GET'])]
    public function search(Request $request, MovieRepository $mov, SerializerInterface $serializer ): Response
    {
        // $serializer est un service de Symfony injecté dans la méthode readMovie
        // $data est la représentation serialisée/normalisée de l'entity $mov
        $search = $request->query->get('search');

        $data = $serializer->normalize($mov->findLike($search), null, ['groups' => 'json_movie']);
        // $response est une instance de JsonResponse qui hérite de Response
        // C'est la classe à utiliser lorsque l'on veut retourner du JSON
        // $data sera automatiquement encodé en JSON
        
        
        $response = new JsonResponse( $data );
       

        return $response;
    }

     #[Route('/api/movies/{id}', name: 'app_api_movie', methods:['GET'], requirements: ['id' => '\d+'])]
     public function readMovie(Movie $mov, SerializerInterface $serializer ): Response
     {

        // $serializer est un service de Symfony injecté dans la méthode readMovie
        // $data est la représentation serialisée/normalisée de l'entity $mov
        $data = $serializer->normalize($mov, null, ['groups' => 'json_movie']);
        // $response est une instance de JsonResponse qui hérite de Response
        // C'est la classe à utiliser lorsque l'on veut retourner du JSON
        // $data sera automatiquement encodé en JSON
        $response = new JsonResponse( $data );
        return $response;
        
        
     }

    

    #[Route('/api/category/{id}', name: 'app_api_category', methods:['GET'])]
    public function readCategory(Category $cat, SerializerInterface $serializer ): Response
    {
        // $serializer est un service de Symfony injecté dans la méthode readMovie
        // $data est la représentation serialisée/normalisée de l'entity $mov
        $data = $serializer->normalize($cat, null, ['groups' => 'json_category']);
        // $response est une instance de JsonResponse qui hérite de Response
        // C'est la classe à utiliser lorsque l'on veut retourner du JSON
        // $data sera automatiquement encodé en JSON
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/categories', name: 'app_api_category', methods:['GET'])]
    public function readAllCategory(CategoryRepository $cat, SerializerInterface $serializer ): Response
    {
        // $serializer est un service de Symfony injecté dans la méthode readMovie
        // $data est la représentation serialisée/normalisée de l'entity $mov
        $data = $serializer->normalize($cat->findAll(), null, ['groups' => 'json_category']);
        // $response est une instance de JsonResponse qui hérite de Response
        // C'est la classe à utiliser lorsque l'on veut retourner du JSON
        // $data sera automatiquement encodé en JSON
        $response = new JsonResponse( $data );
        return $response;
    }

    #[Route('/api/user_logged', name: 'app_api_user', methods:['GET'])]
    public function user_logged(SerializerInterface $serializer): Response
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

    

    


}
