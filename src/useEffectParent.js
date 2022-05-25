import React, { useState } from 'react';
import Baby from './useEffectChild';

function Father(props) {
    const [dad, setDad] = useState("黃昏")
    const [born, setBorn] = useState(false)

    const changeDad = () => {
        if (dad === "黃昏")
            setDad("黎明")
        else
            setDad("黃昏")
    }

    const getBaby = () => {
        if (born === true)
            return < Baby dad={dad} />
    }

    return (
        <div>
            <button onClick={changeDad}>換爸爸</button>
            <button onClick={() => setBorn(!born)}>{born ? "不乖!送回去孤兒院" : "為了任務變女兒控"}</button>
            <div>{getBaby()}</div>
        </div>
    )
}

export default Father;