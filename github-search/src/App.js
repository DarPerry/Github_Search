import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';

function App() {

const [currentSearchInfo, setCurrentSearchInfo] = useState(null);

  return (
    <React.Fragment>
      <header className='jumbotron row'>
        <h1 className='col-4 offset-4'>Github Search</h1>
      </header>
      <SearchBar message='Hello, World!' setSearchState={setCurrentSearchInfo}/>
      {
        !currentSearchInfo ? null :
        Object.keys(currentSearchInfo).length === 0 ? <div>Nope :(</div> : <UserCard {...currentSearchInfo} />
      }
    </React.Fragment>
  );
}

export default App;
