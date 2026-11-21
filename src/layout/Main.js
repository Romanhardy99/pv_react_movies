import React from 'react';
import './Main.css';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

class Main extends React.Component {
    state =
        {
            movies: []
        }
    componentDidMount() {
        //функция неявно вызывается всякий раз, когда компонент смонтировался на страницу
        fetch('https://www.omdbapi.com/?s=The%20Transporter&apikey=f643dbcc')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    }
    searchMovie = (str, type = 'all') => {
        fetch(`https://www.omdbapi.com/?s=${str}${type !== 'all' ? `&type=${ type }` : ''}&apikey=f643dbcc`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    }
    render() {

        return (
            <main>
                <Search searchMovie={this.searchMovie} />
                {
                    this.state.movies == null ? <h1> Введите поисковой запрос</h1> :
                    this.state.movies.length == 0 ?
                    <Preloader /> :
                            <MovieList movies={this.state.movies} />   
                }
            </main>
        )
    }
}

export default Main;
//const isLoading = this.state.movies.length === 0;
//<main className={isLoading ? 'loading' : undefined}>
/*{isLoading ? (
<Preloader />
) : (
<MovieList movies={this.state.movies} />
)}*/