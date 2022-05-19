//import logo from './logo.svg';
import React from 'react';
import AppChild from './AppChild.js';
import AppChild2 from './AppChild2.js';
import './App.css';
//import Test from './Test.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
      //name: "初始值",
      //displaybutton: ["All", "Todo", "Done"],
      alllist: ["資料庫", "科技創新", "視覺化", "書報討論", "Meet"],
      todolist: ["資料庫", "科技創新", "視覺化", "書報討論"],
      donelist: ["Meet"]
    }
    this.addtask = this.addtask.bind(this);
    this.filterer = this.filterer.bind(this);
  }

  addtask(target) {
    if (target.trim() !== "") {
      const alllist = this.state.alllist;
      this.setState({ alllist: [...alllist, target] });
    }
  }

  filterer(target) {
    this.setState({ filter: target});
  }

  render() {
    return (
      <div className='nav'>
        <div className='title'>To DO List</div>
        <div>
          <AppChild inputitem={this.addtask} buttonone={this.state.displaybutton} filter={this.filterer} />
        </div>
        <div>
          <AppChild2 list={this.state} />
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
