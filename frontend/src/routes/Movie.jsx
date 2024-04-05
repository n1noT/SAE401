import { useLoaderData } from "react-router-dom";
import { fetchOneMovie } from "../lib/loaders";
import { getCookie } from "../lib/utils";
import SeeMovie from "../ui/SeeMovie";



export async function loader({params}){
    let user = getCookie('email');
    let movieData = await fetchOneMovie(params.idmovie
        , user
        );
    
    return {data: movieData, id: params.idmovie};
}
 

export default function Movie(){

    let movie = useLoaderData();

    return(
        <SeeMovie buttonContent={'Lecture'} linkContent={movie.data.trailer} movie={movie.data} idmovie={movie.id}/>
    )
    
}