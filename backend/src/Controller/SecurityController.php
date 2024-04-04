<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use App\Entity\User;
use App\Form\LoginFormType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class SecurityController extends AbstractController
{
    #[Route(path: '/login', name: 'app_login')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {

        // // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();

        // // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('security/login.html.twig', [
            'last_username' => $lastUsername,
            'error' => $error,
        ]);
    }

    #[Route(path: '/logged', name: 'app_logged')]
    public function logged(TokenInterface $token): Response
    {
        if ($this->isGranted('ROLE_USER')) {
            $user = $token->getUser();

            $cookie = new Cookie('user_id', $user->getId(), time() + (3600 * 24), '/', '', false, false);

            // Créer une réponse de redirection avec le cookie
            $response = new RedirectResponse('http://localhost:8090/connected');
            $response->headers->setCookie($cookie);

            return $response;
        }

        $response = new RedirectResponse('http://localhost:8080/login');

        return $response;
    }

    #[Route(path: '/logout', name: 'app_logout')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}



