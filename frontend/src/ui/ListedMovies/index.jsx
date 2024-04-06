import Card from '../CardMovie'
import TitleContent from '../TitleContent'
import { Link } from 'react-router-dom';
import Carousel from 'react-grid-carousel'

export default function ListedMovies ({data}){

    let categoryList = [];


    for (let category of data.categories){
    
    let moviesList = data.movies.map((mov) => {
        for(let i = 0; i< mov.category.length; i++){
        if(category.name ==  mov.category[i].name){
        let imageBox = '/assets/images/'+mov.urlImage;
        
        return (
            <Carousel.Item>
                <div key={mov.id} className="w-full">
                <Link to={'/movie/'+ mov.id}>
                    <Card
                    bgImage={imageBox}
                    title={mov.name}
                    channelImage={'/assets/images/logoCanal.webp'}
                    size="small"
                    />
                    <TitleContent name={mov.name} category={mov.category[0].name} content='Film'/>
                </Link>
                </div>
            </Carousel.Item>
        );
        }
        }
        
        }
        
    )

    let colNum = 3;

    if(window.innerWidth>1000 && window.innerWidth<1500){
        colNum = 4;
    }

    if(window.innerWidth>1500){
        colNum = 6;
    }
        
    categoryList.push(
        <li className='mt-8 '>
            <h3 className='text-clr-T-base font-button-secondary text-2xl font-bold m-1'>{category.name}</h3>
            <div >
                <Carousel cols={colNum} row={1} gap={8} loop >
                    {moviesList}
                </Carousel>
                
            </div>
        </li>
    )
    }
    

    return(
        
        <ul className='w-screen overflow-hidden'>
            
                {categoryList} 

            
        </ul>
    )
}


