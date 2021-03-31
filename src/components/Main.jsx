import React from 'react'
import {Movies} from './Movies'
import {Preloader} from './Preloader'
import {Search} from './Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
    state = {
        movies: [],
        loading: true
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovies = (query, type = 'all', yearFrom = '1800', yearTo = '2022') => {
        this.setState({loading: true});
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}${type !== 'all' ? `&type=${type}`:''}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }
    

    render() {
        const {movies, loading} = this.state;
        
        return <main>
            <Search searchMovies={this.searchMovies}/>
            
            <div className="container">
                {
                    loading ? (
                        <Preloader />
                    ) : <Movies movies={movies} />
                    
                }
                
            </div>
        </main>
    }
}

export {Main};