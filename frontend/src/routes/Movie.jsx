import { useLoaderData } from "react-router-dom";
import { fetchOneMovie } from "../lib/loaders";
import { getCookie } from "../lib/utils";
import SeeMovie from "../ui/SeeMovie";



export async function loader({params}){
    let user = getCookie('email');
    let movieData = await fetchOneMovie(params.idmovie
        , user
        );
    
    return movieData;
}
 

export default function Movie(){

    let movie = useLoaderData();

    let user = getCookie('user_role');
    let fillButtonContent = '';
    let fillButtonLink = '';

    if(user){
        fillButtonContent = 'Lecture';
        fillButtonLink = movie.trailer;
    }
    else{
        fillButtonContent = 'S\'abonner';
        fillButtonLink = 'http://localhost:8080/register';
    }

    return(
        <SeeMovie buttonContent={fillButtonContent} linkContent={fillButtonLink} movie={movie}/>
    )
    
}