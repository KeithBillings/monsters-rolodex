import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {
        firstName: 'Keith',
        lastName: 'Billings',
      },
      company: 'Brandlive',
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            My name is {this.state.name.firstName} {this.state.name.lastName}
          </p>
          <button
            onClick={() => {
              this.setState(
                (state, props) => {
                  const { firstName, lastName } = state.name;

                  return { name: { firstName: 'Mochi', lastName } };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
