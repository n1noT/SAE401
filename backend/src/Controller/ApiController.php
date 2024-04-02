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

class ApiController extends AbstractController
{
    #[Route('/api/registered/', name: 'app_api_registered')]
    public function registered(): Response
    {
        return dd('USER REGISTERED !');
    }

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
        var_dump($response);
        return $response;
    }

    // #[Route('/api/movies/{id}', name: 'app_api_movie', methods:['GET'])]
    // public function readMovie(Movie $mov, SerializerInterface $serializer ): Response
    // {
    //     // $serializer est un service de Symfony injecté dans la méthode readMovie
    //     // $data est la représentation serialisée/normalisée de l'entity $mov
    //     $data = $serializer->normalize($mov, null, ['groups' => 'json_movie']);
    //     // $response est une instance de JsonResponse qui hérite de Response
    //     // C'est la classe à utiliser lorsque l'on veut retourner du JSON
    //     // $data sera automatiquement encodé en JSON
    //     $response = new JsonResponse( $data );
    //     return $response;
    // }

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
        var_dump($response);
        // $response->headers->set('Access-Control-Allow-Origin', '*');
        // $response->headers->set('Access-Control-Allow-Methods', 'GET, OPTIONS');
        // $response->headers->set('Access-Control-Allow-Headers', 'Content-Type');

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


}
