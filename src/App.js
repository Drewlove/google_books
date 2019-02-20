import React, { Component } from 'react';
import Header from './Header';
import SearchForm from './SearchForm';
import SearchResultsList from './SearchResultsList';
import './App.css';

class App extends Component {
//next: filter by print type and\or book type
//put the filter options on the form
//onChange should trigger a search, with modifications on the url
//in accordance with those filter parameters
//view here for details on filter: https://developers.google.com/books/docs/v1/using#query-params

  state = {
    searchResults: ''
  }
  
  search(term, printType, bookType){
    const API_KEY = 'AIzaSyBMNajKclXbswxKcSNu92y6-2otO0DGLb8';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${term}&printType=${printType}&filter=${bookType}&key=${API_KEY}`;
    const options = {
    method: 'GET'
  }

    fetch(url, options)
    .then(res => {
      if(!res.ok){
        throw new Error('Something is wrong...')
      }
      return res
    })
    .then(res => res.json())
    .then(data => {
      const searchResults = data.items.map(key => {
        console.log(key.volumeInfo)
        return key.volumeInfo
      })
      this.setState({searchResults})
      this.showPrintType(); 
    })
    .catch(err => {
      this.setState({error: err.message})
    })
}

showPrintType(){
  let {searchResults} = this.state; 
  Object.keys(searchResults).map(key => {
    console.log(searchResults[key].printType)
  })
}

  render() {
    return (
      <div className="App">
      <Header />
      <SearchForm search={(term, printType, bookType)=>this.search(term, printType, bookType)}/>
      <SearchResultsList searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
