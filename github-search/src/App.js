import React from 'react';
import SearchBar from './components/searchBar';

function App() {
  return (
    <React.Fragment>
      <header className='jumbotron row'>
        <h1 className='col-4 offset-4'>Github Search</h1>
      </header>
      <SearchBar message='Hello, World!' />
    </React.Fragment>
  );
}

export default App;
