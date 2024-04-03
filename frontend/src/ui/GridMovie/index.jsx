import Card from '../CardMovie'
import TitleContent from '../TitleContent'
import {Link} from 'react-router-dom'

export default function GridMovie({data}){
    let moviesList = data.map((mov) => {
        let imageBox = '/assets/images/' + mov.urlImage;
        return (
          <li key={mov.id} className="block m-1 w-min">
            <Link to={'/cinema/' + mov.id}>
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
    )
    return(
        <>
        {moviesList}
        </>
    )
}