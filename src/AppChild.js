import React from 'react';
//import { nanoid } from 'nanoid';

function Todolist(props) {
    const filterbutton = props.buttonone.map(value => <Showbutton filter={props.filter} key={value} buttonone={value} />);
    return (
        <div className='classify'>
            <div >
                {/*<button onClick={()=> props.inputitem("123")}>123</button>*/}
                <Inputtask inputitem={props.inputitem} />
            </div>
            {filterbutton}
        </div>
    )
}

function Inputtask(props) {
    return (
        <div>
            <input type="text" id="inputtask" placeholder={"Add new task ..."} />
            <button onClick={() => { console.log(document.getElementById("inputtask").value); props.inputitem(document.getElementById("inputtask").value); document.getElementById("inputtask").value = "" }}> Add</button>
        </div >
    )
}

function Showbutton(props) {
    return (
        /*<div><button onClick={() => props.filter("all")}>All</ button >
        <button onClick={() => props.filter("todo")}>Todo</ button>
        <button onClick={() => props.filter("done")}>Done</ button></div>*/
        <button onClick={() => { props.filter(props.buttonone); console.log(props.buttonone) }}>{props.buttonone}</ button >
    )
}

export default Todolist;