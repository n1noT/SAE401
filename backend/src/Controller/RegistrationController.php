<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\Cookie;

class RegistrationController extends AbstractController
{
    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): Response
    {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword(
                $userPasswordHasher->hashPassword(
                    $user,
                    $form->get('plainPassword')->getData()
                )
            );

            $entityManager->persist($user);
            $entityManager->flush();

            $role= json_encode($user->getRoles());

            // Créer un nouveau cookie
            $cookieRole= new Cookie(
                'user_role',          // Nom du cookie
                $role,     // Valeur du cookie
                time() + 3600 * 24 *7, // Date d'expiration du cookie 
                '/',                // Chemin du cookie 
                null,               // Domaine du cookie 
                false,              // Secure (true si vous souhaitez que le cookie soit transmis uniquement via HTTPS)
                false               // HttpOnly (true si vous ne voulez pas que JavaScript puisse accéder au cookie)
            );

            $cookieEmail = new Cookie('user_email', $user->getEmail(), time() + (3600 * 24), '/', '', false, false);

            $response = new RedirectResponse('http://localhost:8090/connected');
            $response->headers->setCookie($cookieRole);
            $response->headers->setCookie($cookieEmail);
            
        
            
            return $response;
    

        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form,
        ]);
    }
}
