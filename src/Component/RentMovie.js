import React, { Component } from 'react'
import Cart from './Cart'
import MovieList from './MovieList'

export default class RentMovie extends Component {

    render() {
        return (
            <div className="container">
                <MovieList 
                    movies={this.props.movies} 
                    buttonText="Add to Cart"
                    buttonClass="btn-success"
                    onButtonClick={this.props.onAddToCart}
                    showButton />
                <Cart cart={this.props.cart} onRemoveFromCart={this.props.onRemoveFromCart} />
            </div>
        )
    }
}