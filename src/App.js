import React, { Component } from "react";
import './App.css';
import RentMovie from "./Component/RentMovie";
import Navbar from "./Component/Navbar";
import AddMovieReview from "./Component/AddMovieReview";
import { MOVIES } from "./shared/data";



const RENT_MOVIE_PAGE = "rent-movie";
const ADD_MOVIE_REVIEW_PAGE = "add-movie-review";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: RENT_MOVIE_PAGE,
      movies: MOVIES,
      cart: [],
    };
  }

  handleNavigate = (location) => {
    this.setState({ currentLocation: location });
  };

  handleAddToCart = (id) => {
    let item = this.state.cart.find((i) => i.id === id);
    let cart = [];
    if (!item) {
      const movie = this.state.movies.find((c) => c.id === id);
      item = { id, text: movie.title, number: 1 };
      cart = this.state.cart.concat([item]);
    } else {
      const itemIndex = this.state.cart.indexOf(item);
      cart = [...this.state.cart];
      cart[itemIndex] = { ...item, number: item.number + 1 };
    }
    this.setState({ cart });
  };

  handleRemoveFromCart = (id) => {
    const item = this.state.cart.find((i) => i.id === id);
    let cart = [];
    if (item.number === 1) {
      cart = this.state.cart.filter((i) => i.id !== id);
    } else {
      const itemIndex = this.state.cart.indexOf(item);
      cart = [...this.state.cart];
      cart[itemIndex] = { ...item, number: item.number - 1 };
    }
    this.setState({ cart });
  };

  handleAddMovieReview = (movie) => {
    const movies = [...this.state.movies];
    movies.push(movie);
    this.setState({ movies: movies });
  };

  handleRemoveMovieReview = (id) => {
    const movies = this.state.movies.filter((movie) => movie.id !== id);
    const cart = this.state.cart.filter((i) => i.id !== id);
    this.setState({ movies: movies, cart: cart });
  };

  render() {
    const links = [
      { title: "Rent Movie", location: RENT_MOVIE_PAGE },
      { title: "Add Movie Review", location: ADD_MOVIE_REVIEW_PAGE },
    ];

    return (
      <div>
        <Navbar
          title="Movies"
          links={links}
          currentLocation={this.state.currentLocation}
          onNavigate={this.handleNavigate}
        />
        {this.state.currentLocation === RENT_MOVIE_PAGE ? (
          <RentMovie
            cart={this.state.cart}
            movies={this.state.movies}
            onAddToCart={this.handleAddToCart}
            onRemoveFromCart={this.handleRemoveFromCart}
          />
        ) : (
          ""
        )}
        {this.state.currentLocation === ADD_MOVIE_REVIEW_PAGE ? (
          <AddMovieReview
            movies={this.state.movies}
            onAddMovieReview={this.handleAddMovieReview}
            onRemoveMovieReview={this.handleRemoveMovieReview}   
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}
