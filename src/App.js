import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  // On page load, load monsters
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => {
        setMonsters(users);
        setFilteredMonsters(users);
      });
  }, []);

  // On search input change, filter monsters
  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchInput);
    });

    setFilteredMonsters(filteredMonsters);
  }, [searchInput, monsters]);

	// Handle search input change
  const handleOnSearch = (e) => {
    setSearchInput(e.target.value.toLocaleLowerCase());
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox className={'monsters-search-box'} handleOnSearch={handleOnSearch} placeholder={'Search Monsters'} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
