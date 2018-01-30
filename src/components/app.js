import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children /* used for react router to know that if it has any children it should match those route with the correct children. */}
      </div>
    );
  }
}
