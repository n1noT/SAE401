import Card from '../CardMovie'
import {Link} from 'react-router-dom'

export default function GridMovie({data}){
    let moviesList = data.map((mov) => {
        let imageBox = '/assets/images/' + mov.urlImage;
        return (
          <li key={mov.id} className="block m-1">
            <Link to={'/cinema/' + mov.id}>
              <Card
                bgImage={imageBox}
                title={mov.name}
                channelImage={'/assets/images/logoCanal.webp'}
                size="small"
              />
              <div className='text-clr-T-base'>
                <h3>
                  {mov.name}
                </h3>
                <h3 className='opacity-50'>
                  {'Film ' + mov.category[0].name}
                </h3>
              </div>
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