import React from 'react';
//import {nanoid} from 'nanoid';

function Tasklist(props) {
    let list = [];
    switch (props.filter) {
        case "All":
            list = props.list;
            break;
        case "Todo":
            list = props.list.filter(value => value.complete === false);
            break;
        case "Done":
            list = props.list.filter(value => value.complete === true);
            break;
        default:
            list = props.list;
    }
    //(console.log(props.filter));
    const secondlist = list.map(value => <Task key={value.name} id={value.id} task={value.name} delete={props.delete} checks={props.checks} />)
    return (
        <div className='taskblock'>
            {secondlist}
        </div>
    );
}

function Task(props) {
    return (
        <div className='tasklist'>
            <input type="checkbox" onChange={() => { props.checks(props.id) }} />
            <b>{props.task}</b>
            <button>Edit</button>
            <button onClick={() => { props.delete(props.id); console.log(props.task) }}> Delete</button>
        </div >
    );
}

export default Tasklist;