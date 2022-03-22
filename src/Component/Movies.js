import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    return (
      <div className="card">
        <img src={this.props.movie.image} className="card-image-top" />
        <div className="card-body">
          <h3 className="card-title">{this.props.movie.title}</h3>
          <p className="card-text1">{`This movie has ${this.props.movie.rate} stars`}</p>
          <div class="rating">
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
            <span>☆</span>
          </div>
          <p className="card-text">{this.props.movie.description}</p>
          {this.props.showButton ? (
            <button
              className={"btn " + this.props.buttonClass}
              onClick={() => this.props.onButtonClick(this.props.movie.id)}
            >
              {this.props.buttonText}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
