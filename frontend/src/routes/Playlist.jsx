import GridMovie from "../ui/GridMovie";
import { useLoaderData } from "react-router-dom";
import { fetchPlaylist } from "../lib/loaders";


export async function loader(){
    let playlistData = await fetchPlaylist();
      
    return playlistData ;
  }

export default function Playlist(){

    let movies = useLoaderData();

    return(
        <div className="flex flex-col gap-4 p-4">
            <h3 className="font-button text-clr-T-base text-2xl">Ma Playlist</h3>
            <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-4  '>
                <GridMovie data={movies}/>
            </ul>
        </div>
    )
}