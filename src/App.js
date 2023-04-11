import { Component } from 'react';

import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchInput: '',
    };

    // monsters
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState(() => ({ monsters: users })));

    console.log(this.state.monsters);
  }

  handleOnSearch = (e) => {
    const searchInput = e.target.value.toLocaleLowerCase();
    this.setState(() => ({ searchInput }));
  };

  render() {
    const { handleOnSearch } = this;
    const { monsters, searchInput } = this.state;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchInput);
    });

    return (
      <div className='App'>
        <SearchBox handleOnSearch={handleOnSearch} placeholder={'Search Monsters'} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
