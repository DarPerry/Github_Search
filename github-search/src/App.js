import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import History from './components/History';
import RepoCard from './components/RepoCard';

function App() {

  const [currentSearchInfo, setCurrentSearchInfo] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  return (
    <>
      <header className='jumbotron row'>
        <h1 className='col-6 offset-3'>Github Search with History</h1>
      </header>
      <SearchBar
        currentHistory={searchHistory}
        setSearchState={setCurrentSearchInfo}
        addToSearchHistory={setSearchHistory}
        currentSearch={currentSearchInfo} />
      <div className='resultContainer'>
        {
          !currentSearchInfo ? null :
            Object.keys(currentSearchInfo).length === 0 ?
              <h3 className='errorString'>No results found :(</h3> : renderCard(currentSearchInfo.type, currentSearchInfo)
        }
      </div>
      <History searchHistory={searchHistory} />
    </>
  );
}

const renderCard = (type, currentSearchInfo) => {
  if (type == 'user')
    return <UserCard {...currentSearchInfo} />;
  if (type == 'repo')
    return <RepoCard {...currentSearchInfo} />;
}

export default App;
