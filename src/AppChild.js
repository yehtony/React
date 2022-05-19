import React from 'react';
//import AppChild2 from './AppChild2.js';

function Todolist(props) {
    //const firstlist = props.buttonone.map(value => <Showbutton filter={props.filter} key={value} buttonone={value} />);
    return (
        <div className='classify'>
            <div >
                {/*<button onClick={()=> props.inputitem("123")}>123</button>*/}
                <Inputtask inputitem={props.inputitem} />
            </div>
            <Showbutton filter={props.filter} />
        </div>
    )
}

function Inputtask(props) {
    return (
        <div>
            <input type="text" id="inputtask" placeholder={"Add new task ..."} onChange={(e) => console.log(e.target.value)} />
            <button onClick={() => { props.inputitem(document.getElementById("inputtask").value); document.getElementById("inputtask").value = "" }}> Add</button>
        </div >
    )
}

function Showbutton(props) {
    return (
        <div >
            <button onClick={() => props.filter("all")}>All</ button >
            <button onClick={() => props.filter("todo")}>Todo</ button>
            <button onClick={() => props.filter("done")}>Done</ button>
            {/*<button onClick={() => { props.filter({props.buttonone}) }}> {props.buttonone}</ button >*/}
        </div>
    )
}

export default Todolist;