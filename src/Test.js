import React, { useState } from 'react';

function Test(props) {
    //const [name, setName] = useState("新值");
    return (
        <div>
            <button onClick={() => props.varable("123")}>{props.name}</button >
        </div>
    );
}

export default Test;