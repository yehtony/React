import React from 'react';

function Tasklist(props) {
    let listchoice = [];
    switch (props.list.filter) {
        case "all":
            listchoice = props.list.alllist;
            break
        case "todo":
            listchoice = props.list.todolist;
            break
        case "done":
            listchoice = props.list.donelist;
            break
        default:
            listchoice = props.list.alllist;
    }

    const secondlist = listchoice.map(value => <Task key={value} task={value} />)
    return (
        <div className='taskblock'>
            {secondlist}
        </div>
    );
}

function Task(props) {
    return (
        <div className='tasklist'>
            <input type="checkbox" />
            <b>{props.task}</b>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    );
}

export default Tasklist;