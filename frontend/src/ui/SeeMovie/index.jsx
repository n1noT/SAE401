import {Link} from 'react-router-dom';
import Button from '../Button';


export default function SeeMovie({buttonContent, linkContent, movie, idmovie}){

    async function handlePlaylist(){
        let add = await fetch('http://localhost:8080/api/playlist/add/' + idmovie, { credentials:'include'});
        
    }
    
    let imageMovie = '/assets/images/' + movie.urlImage;

    let catList = '';

    for(let i=0; i<movie.category.length; i++){
        if(i == 0 ){
            catList += movie.category[i].name;
        }else{
            catList += ', ' + movie.category[i].name;
        }
    }

    return(
        <div className="flex flex-col justify-between overflow-hidden gap-2 bg-secondary-bg rounded-xl m-4 lg:m-8 lg:flex-row-reverse">
            <img src={imageMovie} alt={movie.title} className="object-cover" />
            <div className="flex flex-col gap-8 p-8">
                <div className="text-clr-T-base">
                    <h3 className="text-xl font-button">{movie.name}</h3>
                    <h4 className="text-lg font-button-secondary opacity-50 overflow-hidden text-nowrap font-normal">{catList}</h4>      
                </div>
                <Link to={linkContent} className="w-full flex">
                    <Button intent="primary" className="w-full">
                        
                        <span>{buttonContent}</span>
                    </Button>
                </Link>
                <button className='p-3 text-clr-T-base rounded-full w-8 h-8 bg-button-bg flex justify-center items-center' onClick={handlePlaylist}>
                    +
                </button>

                <div className="text-clr-T-base">
                    <h3 className="text-xl font-button-secondary">Synopsis :</h3>
                    <p className="text-lg whitespace-nowrap text-wrap font-light h-min">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, reiciendis incidunt laborum repellat ut ipsam dolorem saepe a, sit illum ex, officiis accusantium eaque quas. Accusantium iusto, error eius consequatur impedit suscipit, sequi odit assumenda eaque omnis eveniet atque nam cupiditate molestiae facilis dolorem officiis optio, repellendus ipsa neque cum?</p>
                </div>
            </div>
            
            
        </div>
    )
}