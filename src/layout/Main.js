import React, { Component } from 'react'
import Loader from '../components/Loader'
import Movies from '../components/Movies'
import Search from '../components/Search'

export default class Main extends Component {
    state = {
        movies: [],
        loading: true
    }
    componentDidMount() {
        fetch('https://www.omdbapi.com/?apikey=888a094&s=panda')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }
    searchMovie = (mve, type = 'all') => {
        this.setState({ loading: true })
        fetch(`https://www.omdbapi.com/?apikey=888a094&s=${mve}${type != 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }
    render() {
        return (
            <div className='content blue-grey darken-3'>
                <Search searchMovie={this.searchMovie} />
                {this.state.loading ? <Loader /> : (<Movies movies={this.state.movies} />)}
            </div>
        )
    }
}

