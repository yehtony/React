import React from 'react';
import P4c from './P4c.js';


class P4p extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appear: true,
            appear2: true
        }
        this.handleclick = this.handleclick.bind(this);
        this.handleclick2 = this.handleclick2.bind(this);
        this.magic = this.magic.bind(this);
    }

    handleclick() {
        this.setState({ appear: !this.state.appear })
    }
    handleclick2() {
        this.setState({ appear2: !this.state.appear2 })
    }

    magic() {
        if (this.state.appear)
            return <P4c appear2={this.state.appear2} />
    }

    render() {
        return (
            <div>
                <button onClick={this.handleclick}>{(this.state.appear === true) ? "消失" : "出現"}</button>
                <button onClick={this.handleclick2}>+1</button>
                <div>{this.magic()}</div>
            </div>
        )
    }
}

export default P4p; 