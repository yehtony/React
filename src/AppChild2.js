import React from 'react';

function Tasklist(props) {
    const secondlist = props.task.map(value => <Task key={value} task={value} />)
    return (
        <div>
            {secondlist}
        </div>
    );
}

function Task(props) {
    return (
        <div>
            <input type="checkbox" />
            {props.task}
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}

export default Tasklist;