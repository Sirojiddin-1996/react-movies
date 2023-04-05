import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        search: 'panda',
        type: 'all'
    }
    handleKey = (e) => {
        if (e.key === 'Enter') {
            this.props.searchMovie(this.state.search, this.state.type);
        }
    }
    handleFilter = (e) => {
        this.setState(() => ({ type: e.target.dataset.type }), () => {
            this.props.searchMovie(this.state.search, this.state.type)
        })
    }

    render() {
        return (
            <div className='myApp container'>
                <div className='app row'>
                    <div className="col margn s12">
                        <div className="input-field">
                            <input placeholder='Search'
                                type="search"
                                className="validate input-color "
                                value={this.state.search}
                                onChange={(e) => this.setState({ search: e.target.value })}
                                onKeyDown={this.handleKey} />
                            <a className='btn search-btn' onClick={() => this.props.searchMovie(this.state.search, this.state.type)}>Search</a>
                        </div>
                    </div>
                </div>
                <div>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='all'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'all'} />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='movie'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'movie'} />
                        <span>Movies</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type='series'
                            onChange={this.handleFilter}
                            checked={this.state.type === 'series'} />
                        <span>Series</span>
                    </label>
                </div>

            </div>
        )
    }
}
