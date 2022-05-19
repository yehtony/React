//import logo from './logo.svg';
import React from 'react';
import AppChild from './AppChild.js';
import AppChild2 from './AppChild2.js';
import './App.css';
import { nanoid } from 'nanoid';
//import Test from './Test.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasklist: [{ id: nanoid(), name: "Database System", complete: false }, { id: nanoid(), name: "Tecnology Support", complete: false }, { id: nanoid(), name: "Visual analysis", complete: false }, { id: nanoid(), name: "Seminar", complete: false }],
      filter: "All",
      //name: "初始值",
      displaybutton: ["All", "Todo", "Done"],
      //alllist: ["資料庫", "科技創新", "視覺化", "書報討論", "Meet"],
      //todolist: ["資料庫", "科技創新", "視覺化", "書報討論"],
      //donelist: ["Meet"]
    }
    this.adder = this.adder.bind(this);
    this.filterer = this.filterer.bind(this);
    this.deleter = this.deleter.bind(this);
  }

  adder(target) {
    if (target.trim() !== "") {
      const addtasklist = this.state.tasklist;
      this.setState({ tasklist: [...addtasklist, { id: nanoid(), name: target, complete: false }] });
    }
  }

  filterer(target) {
    this.setState({ filter: target });
  }

  deleter(target) {
    const deletetasklist = this.state.tasklist;
    this.setState({ tasklist: deletetasklist.filter(value => value.name !== target) });
  }

  render() {
    return (
      <div className='nav'>
        <div className='title'>To DO List</div>
        <div>
          <AppChild inputitem={this.adder} buttonone={this.state.displaybutton} filter={this.filterer} />
        </div>
        <div>
          <AppChild2 list={this.state.tasklist} filter={this.state.filter} delete={this.deleter} />
        </div>
      </div>
    )
  }
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
