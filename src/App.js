import React from 'react';
import './App.css';
import { BusinessList } from './components/BusinessList/BusinessList';
import { SearchBar } from './components/SearchBar/SearchBar';

export class App extends React.Component {
  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location} and ${sortBy}`)
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp} />
        <BusinessList />
      </div>
    );
  }
}
