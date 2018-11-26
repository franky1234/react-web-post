import React, { Component } from 'react';

class SearchComponent extends Component {

  constructor() {
    super();
    this.title = 'Search Post';
  }
  render() {
    const title = this.title;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default SearchComponent;