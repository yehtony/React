import React, { useState, useEffect } from 'react';

function Baby(props) {
    const [getdata, setGetdata] = useState(false)
    const [rightdad, setRightdad] = useState(true)
    const [mom, setMom] = useState("")

    const ajaxSimulator = () => {
        setTimeout(() => {setMom("約兒") }, 3000)
    }

    const checkDad = () => {
        if (props.dad === "黃昏")
            setRightdad(true)
        else
            setRightdad(false)
    }

    useEffect(() => { checkDad() })
    useEffect(() => {
        ajaxSimulator(); document.getElementById("annia").append("Chichi!"); return (() => {
            document.getElementById("annia").innerHTML = ""
        })
    },[props.dad])


    if (rightdad === true)
        return (
            <div>我叫安妮亞，喜歡吃花生</div>
        )
    else if (rightdad === false)
        return (
            <div>
                <div>我爸爸是黃昏，你不是我爸爸</div>
                <div>我媽媽是{mom}，是個殺手，你小心一點</div>
            </div>
        )

}

export default Baby;