import {Link} from 'react-router-dom';
import Button from '../Button';




export default function SeeMovie({buttonContent, linkContent, movie,  isMovieInPlaylist, handler}){
  
    let playlistBtn = '';

    if(isMovieInPlaylist == true){
        playlistBtn = '-'

    }
    else{
        playlistBtn = '+'

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
        <>
            <div className="flex flex-col justify-between overflow-hidden bg-secondary-bg rounded-xl m-4 lg:m-8 w-full max-w-4xl relative">
                <img src={imageMovie} alt={movie.title} className="object-cover " />
                <div className="flex flex-col gap-8 p-4 p lg:flex-row lg:absolute lg:bottom-0 lg:bg-card-bg lg:pt-12">
                    <div className='flex flex-col gap-6 lg:w-1/3'>
                        <div className="text-clr-T-base">
                            <h3 className="text-xl font-button">{movie.name}</h3>
                            <h4 className="text-lg font-button-secondary opacity-50 overflow-hidden text-nowrap font-normal">{catList}</h4>      
                        </div>
                        <Link to={linkContent} className="w-full flex">
                            <Button intent="primary" className="w-full">                       
                                <span >{buttonContent}</span>
                            </Button>
                        </Link>
                        <button className='p-3 text-clr-T-base rounded-full w-8 h-8 bg-button-secondary-bg flex justify-center items-center' onClick={handler}>
                            <span className='font-bold '>{playlistBtn}</span>
                        </button>
                    </div>
                    

                    <div className="text-clr-T-base  lg:w-2/3">
                        <h3 className="text-xl font-button-secondary">Synopsis :</h3>
                        <p className="text-lg whitespace-nowrap text-wrap font-light h-min">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, reiciendis incidunt laborum repellat ut ipsam dolorem saepe a, sit illum ex, officiis accusantium eaque quas. Accusantium iusto, error eius consequatur impedit suscipit, sequi odit assumenda eaque omnis eveniet atque nam cupiditate molestiae facilis dolorem officiis optio, repellendus ipsa neque cum?</p>
                    </div>
                </div>
                
                
            </div>
        </>
       
    )
}