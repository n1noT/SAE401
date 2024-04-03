import Card from '../CardMovie'
import TitleContent from '../TitleContent'
import { Link } from 'react-router-dom';

export default function ListedMovies ({data}){

    let categoryList = [];

    for (let category of data.categories){
    
    let moviesList = data.movies.map((mov) => {
        for(let i = 0; i< mov.category.length; i++){
        if(category.name ==  mov.category[i].name){
        let imageBox = '/assets/images/'+mov.urlImage;
        
        return (
            <li key={mov.id} className="block m-1 w-min">
            <Link to={'/cinema/'+ mov.id}>
                <Card
                bgImage={imageBox}
                title={mov.name}
                channelImage={'/assets/images/logoCanal.webp'}
                size="small"
                />
                <TitleContent name={mov.name} category={mov.category[0].name} content='Film'/>
            </Link>
            </li>
        );
        }
        }
        
        }
        
    )
        
    categoryList.push(
        <li className='mt-8 '>
            <h3 className='text-clr-T-base font-button-secondary text-2xl font-bold m-1'>{category.name}</h3>
            <ul className="flex ">
                {moviesList}
            </ul>
        </li>
    )
    }

    return(
        <ul className='w-full'>
            {categoryList}
        </ul>
    )
}


