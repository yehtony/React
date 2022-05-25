import React from 'react';

class MountChild extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 0
        }
    }

    componentDidMount() {
        document.getElementById('magic').append("showNumber")
    }
    componentWillUnmount() {
        document.getElementById('magic').innerHTML = "";
    }
    componentDidUpdate(prevProps) {
        if (prevProps.appear2 !== this.props.appear2)
            this.setState({ text: this.state.text + 1 })
    }

    render() {
        return (
            <div>
                <div>{this.state.text}</div>
            </div>
        )
    }
}

export default MountChild; 