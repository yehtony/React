import React from 'react';

//code使用其他程式修改，函式、參數名稱並不代表其此code意思，僅套用其功能

class Baby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRightDad: true,
            isGetData: false,
            Mom: ""
        }
        this.ajaxSimulator = this.ajaxSimulator.bind(this)
        this.scrollTo = this.scrollTo.bind(this);
    }


    ajaxSimulator() {
        setTimeout(() => { this.setState({ isGetData: true, Mom: "滾動完成" }) }, 6000)
    }

    scrollTo() {
        /* 讀取 container元素的scrollLeft */
        let scrollLeft = document.getElementById('container').scrollLeft;
        if (scrollLeft < 800) {
            /* 修改 container元素的scrollLeft */
            document.getElementById('container').scrollLeft = scrollLeft + 0.5;
            setTimeout(this.scrollTo, 7.51);
        }

    }

    componentDidMount() {
        this.ajaxSimulator();
        this.scrollTo();  // 觸發開場動畫
    }

    render() {
        return (
            <div>
                <div id="msg">
                    {(this.state.isGetData === false) ? "讀取中" : this.state.Mom}
                </div>
                <div id="container" style={{ width: "200px", overflowX: "scroll" }}>
                    <div id="left" style={{ width: "800px", fontSize: "30px", textAlign: "center" }}>
                        {"每0.01秒拉桿往右滾動1px,總共會往右600px,持續6秒"}
                    </div>
                </div>
            </div>
        )

    }
}
export default Baby;