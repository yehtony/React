import React from 'react';

function Todolist(props) {
    const firstlist = props.buttonone.map(value => <Showbutton key={value} buttonone={value} />);
    return (
        <div>
            <div>
                {/*<button onClick={()=> props.varable("123")}>123</button>*/}
                <Inputtask varable={props.varable} />
            </div>
            {firstlist}
        </div>
    )
}

function Inputtask(props) {
    return (
        <div>
            <input type="text" id="inputtask" placeholder={"Add new task ..."} />
            <button onClick={() => props.varable(document.getElementById("inputtask").value)}> Add</button>
        </div >
    )
}

function Showbutton(props) {
    return (
        <button>{props.buttonone}</button>
    )
}

export default Todolist;