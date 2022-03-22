import React, { Component } from "react";

export default class AddMovieReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      description: "",
      post: [],
    };

    this.newComment = this.newComment.bind(this);
    this.addComment = this.addComment.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  addComment(title, comment) {
    let previousPost = this.state.post;

    let newcomment = {
      title: title,
      body: comment,
    };
    previousPost.push(newcomment);

    this.setState({
      post: previousPost,
    });
  }

  newComment() {
    if (this.title.value == 0 || this.comment.value == 0) {
      this.setState({
        errorMessage: "Can't submit empty ",
      });
    } else if (!this.state.errorMessage == "") {
      this.addComment(this.title.value, this.comment.value);

      this.title.value = "";
      this.comment.value = "";
      this.setState({
        errorMessage: "",
      });
    }
  }
  handleTitleChange(event) {
    this.setState({ title: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value });
  }

  handleSave(event) {
    event.preventDefault();
    this.props.onAddMovieReview({
      title: this.state.title,
      description: this.state.description,
    });
    this.setState({ title: "", description: "" });
  }

  render() {
    return (
      <div className="container">
        <form action="submit">
          <div className="field">
            <label className="form-label">Movie Title:</label>
            <div className="formcontrol">
              <input
                className="input"
                type="text"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label for="rating">Rate Movie</label>
            </div>
            <div className="col-75">
              <select id="rating" name="star-value">
                <option value="one-star">One Star</option>
                <option value="two-star">Two Star</option>
                <option value="three-star">Three Star</option>
                <option value="four-star">Four Star</option>
                <option value="five-star">Five Star</option>
              </select>
            </div>
            <label className="label">Review:</label>
            <div className="form-control">
              <textarea
                placeholder="Comment"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              ></textarea>
              <p> {this.state.characters} characters (Max 100) </p>
              <p>{this.state.errorMessage}</p>
              <button
                class="button is-primary"
                type="submit"
                onClick={this.handleSave}
              >
                Submit
              </button>
            </div>
            </div>
        </form>
      </div>
    );
  }
}
