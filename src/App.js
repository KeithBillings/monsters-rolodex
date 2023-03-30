import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      filteredMonsters: [],
    };

    console.log('constructor');
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) =>
        this.setState(
          () => ({ monsters: users, filteredMonsters: users }),
          () => {
            console.log(this.state);
          }
        )
      );
    console.log('com ponentDidMount');
  }

  render() {
    console.log('render');
    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          onChange={(e) => {
            const input = e.target.value.toLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster) => monster.name?.toLowerCase()?.includes(input));
            this.setState(() => ({ filteredMonsters: filteredMonsters }));
          }}
        />
        {this.state.filteredMonsters.map((monster, index) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
