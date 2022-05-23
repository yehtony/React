import React from 'react';
import P4c from './P4c.js';

class P4p extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appear: true
        }
        this.handleclick = this.handleclick.bind(this);
        //this.magic = this.magic.bind(this);
    }

    handleclick() {
        this.setState({ appear: !this.state.appear })
    }

    magic() {
        if (this.state.appear)
            return <P4c />
    }

    render() {
        return (
            <div>
                <button onClick={this.handleclick}>
                    {(this.state.appear === true) ? "消失" : "出現"}
                </button>
                <div>{this.magic()}</div>
            </div>
        )
    }
}

export default P4p; 