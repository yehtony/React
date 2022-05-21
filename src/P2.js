import React from 'react';
import { Link } from 'react-router-dom';

class P2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            repoName: null
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick() {
        fetch('https://api.github.com/users/yehtony/repos', { method: "GET" })
            .then(res => res.json())
            .then(data => {
                /*接到request data後要做的事情*/
                this.setState({ repoName: data[0]['name'] });
            })
            .catch(e => {
                /*發生錯誤時要做的事情*/
                console.log(e);
            })
    }

    render() {
        return (
            <div className="App">
                <div className="data-display">
                    {(this.state.repoName === null) ? "目前還有沒有資料" : this.state.repoName}
                </div>
                <button onClick={this.handleClick}>取得Me以英文字母排序的第一個repo</button>
                <nav>
                    <Link to="/01">click to page1</Link>
                    <Link to="/02" style={{ marginLeft: "20px" }}>click to page2</Link>
                </nav>
            </div>
        )
    }
};

export default P2;