import { useLoaderData } from "react-router-dom";
import { fetchOneMovie, fetchPlaylist } from "../lib/loaders";
import { getCookie } from "../lib/utils";
import SeeMovie from "../ui/SeeMovie";
import { useEffect, useState } from "react";

export async function loader({params}){
    let user = getCookie('email');
    let movieData = await fetchOneMovie(params.idmovie, user);
    let playlist = await fetchPlaylist()
    
    return {data: movieData, id: params.idmovie, playlist : playlist};
    
}
 

export default function Movie(){
    
    let movie = useLoaderData();
    
    const [isInPlaylist, setIsInPlaylist] = useState(false);

    useEffect(() => {
        for(let mov of movie.playlist){
            if(mov.id == movie.id){
                setIsInPlaylist(true)
            }
        }
    }, [movie]);
    
    async function handlePlaylist(){
        if(isInPlaylist){
            let del = await fetch('http://localhost:8080/api/playlist/remove/' + movie.id, { credentials:'include'});
            setIsInPlaylist(false)

        }
        else{
            let add = await fetch('http://localhost:8080/api/playlist/add/' + movie.id, { credentials:'include'});
            setIsInPlaylist(true)

        }
        
    }

    return(
        <div className="w-full flex justify-center">

            <SeeMovie buttonContent={'Lecture'} linkContent={movie.data.trailer} movie={movie.data} idmovie={movie.id} isMovieInPlaylist={isInPlaylist} handler={handlePlaylist}/>
        </div>
    )
    
}