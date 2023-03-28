import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        { name: 'Linda', id: '123' },
        { name: 'Frank', id: '456' },
        { name: 'Jacky', id: '789' },
        { name: 'Andre', id: '321' },
      ],
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster, index) => (
          <div key={monster.id}>
            <h1>{monster.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
