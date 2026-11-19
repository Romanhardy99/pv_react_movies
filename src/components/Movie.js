import { useState } from 'react';
import './Movie.css';

function Movie(props) {
    const [failedPoster, setFailedPoster] = useState(null);
    let poster;

    if (!props.Poster || props.Poster === 'N/A' || props.Poster === failedPoster) {
        poster = <div className='poster-placeholder'>Нет постера</div>;
    } else {
        poster = (
            <img
                className="movie-poster"
                src={props.Poster}
                alt={`Постер фильма "${props.Title}"`}
                onError={() => setFailedPoster(props.Poster)}
            />
        );
    }

    return (
        <div className="card">
            {poster}
            <h3>{props.Title} ({props.Year})</h3>
            <div className="type">{props.Type}</div>
        </div>
    )
}
export default Movie;