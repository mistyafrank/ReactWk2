import React, { Component } from 'react'
import MovieList from './MovieList'
import AddMovieReview from './AddMovieReview'

export default class EditMovieReview extends Component {
    render() {
        return (
            <div className="container">
                <AddMovieReview onAddReview={this.props.onAddReview}/>
                <MovieList movies={this.props.movies} 
                    buttonText="Remove" 
                    buttonClass="btn-danger" 
                    onButtonClick={this.props.onRemoveReview} 
                    showButton />
            </div>
        )
    }
}