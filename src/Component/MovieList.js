import React, { Component } from 'react';
import Movie from './Movies';

export default class MovieList extends Component {
    render() {
        return (
            <div className="row my-2">
                <div className="col d-flex">
                    { this.props.movies.map(movie => <Movie key={movie.title} movie={movie} {...this.props} />)}
                </div>
            </div>
        )
    }
}