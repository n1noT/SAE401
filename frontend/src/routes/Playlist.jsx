import { useLoaderData } from "react-router-dom";
import { fetchPlaylist } from "../lib/loaders";
import GridMovie from "../ui/GridMovie";

export async function loader(){
    let movieData = await fetchPlaylist();
    
    return movieData;
}

export default function Playlist(){
    let movies = useLoaderData();

    let formatData = [];

    for(let mov of movies){
        formatData.push(mov.movie)
    }

    return(
        <>
        <h3 className="font-button text-clr-T-base">Ma Playlist</h3>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-4'>
            <GridMovie data={formatData}/>
        </div>
        </>
    )
}