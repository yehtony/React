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
      name: "初始值",
      displaybutton: ["All", "Todo", "Done"],
      tasklist: ["資料庫", "科技創新", "視覺化", "書報討論"],
      alllist: ["資料庫", "科技創新", "視覺化", "書報討論"],
      todolist: ["資料庫", "科技創新", "視覺化", "書報討論"],
      donelist: []
    }
    this.changename = this.changename.bind(this);
  }

  changename(target) {
    const tasklist = this.state.tasklist;
    this.setState({ tasklist: [...tasklist, target] });
  }

  render() {
    return (
      <div>
        <p>To DO List</p>
        <div>
          <p>
            <AppChild varable={this.changename} buttonone={this.state.displaybutton} />
          </p>
        </div>
        <div>
          <p>
            <AppChild2 task={this.state.tasklist} />
          </p>
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
