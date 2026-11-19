import React from 'react';
import './Main.css';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';

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

    render() {
        return (
            <main>
                {
                    this.state.movies.length == 0 ?
                    <Preloader/> :
                    <MovieList movies={this.state.movies} />
                }
            </main>
        )
    }
}
export default Main;