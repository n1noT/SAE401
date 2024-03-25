import Card from '../ui/CardMovie';
import { useLoaderData } from "react-router-dom";
import { fetchApiData } from "../lib/loaders.js";

export async function loader(){
    let moviesData = await fetchApiData();
    return moviesData;
  }
  
  export default function Cinema() {
    
    const data = useLoaderData();
    console.log(data)

    let moviesList = data.map((mov) => {
      // console.log(index);
      return (
        <li key={mov.id}>
          <Card
            bgImage={'./assets/images/' + mov.urlImage}
            channelImage={'./assets/images/logoCanal.webp'}
            size="small"
          />
        </li>
      );
      }
    )

    return (
      <ul className="flex flex-col space-y-5 items-center my-20">
          {moviesList}
      </ul>
    );
  }