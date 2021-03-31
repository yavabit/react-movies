import {Movie} from './Movie'

function Movies(props) {
    const {movies = []} = props;

    return <div className="movies">
        {movies.length ? movies.map(movie => (
            <Movie key={movie.imdbID} {...movie}/>
        )) : <div style={{height: '100vh'}}><h4>Nothing found</h4></div> 
    }
    </div>
}

export {Movies};