import React from 'react';

class P4c extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appear2: true
        }
    }

    componentDidMount() {
        document.getElementById('magic').append("magic")
    }
    componentWillUnmount() {
        document.getElementById('magic').innerHTML = "";
    }

    render() {
        return
    }
}

export default P4c; 