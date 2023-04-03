import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredMonsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => ({ monsters: users, filteredMonsters: users }),
          () => {
            // console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (e) => {
    const input = e.target.value.toLowerCase();
    const filteredMonsters = this.state.monsters.filter((monster) => monster.name?.toLowerCase().includes(input));
    this.setState(() => ({ filteredMonsters: filteredMonsters }));
  };

  render() {
    const { filteredMonsters } = this.state;
    const { onSearchChange } = this;

    return (
      <div className='App'>
        <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange} />
        {filteredMonsters.map((monster, index) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
