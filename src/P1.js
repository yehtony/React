import React from 'react';
import { Link } from 'react-router-dom';

class P1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: "30%"
    }
    //this.name = "舊的名字";
    this.changePercent = this.changePercent.bind(this);
  }

  changePercent() {
    this.setState({ percent: (this.state.percent === "70%") ? "30%" : "70%" })
    console.log("hey")
  }


  render() {
    return (
      <div>
        <div className="progress-back" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
          <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: this.state.percent, height: "100%", borderRadius: "10px" }}></div>
        </div>
        <button onClick={this.changePercent}>Change percent</button>
        <nav>
          <Link to="/01">click to page1</Link>
          <Link to="/02" style={{ marginLeft: "20px" }}>click to page2</Link>
        </nav>
      </div>
    );
  }
}
export default P1;