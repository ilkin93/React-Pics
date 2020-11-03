import React, { Component } from "react";

export class SearchBar extends Component {
  state = { term: "" };

  //onInputChange = (event) => {};

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmitForm} className="ui form">
          <div className="field">
            <label htmlFor="search">Search Picture</label>
            <input
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
              type="text"
              id="search"
            />
          </div>
        </form>
      </div>
    );
  }
}
