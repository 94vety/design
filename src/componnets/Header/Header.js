import { Component } from "react";
import { Steps } from "antd";
import './Header.css';

const { Step } = Steps;

export default class Header extends Component {
    render() {
        return (            
            <>
                <div className="title">基于触发词事件检测的事件库</div>
                <Steps 
                    current={1}
                    className="steps"
                >
                    <Step title="Finished" />
                    <Step title="In Progress" />
                    <Step title="Waiting" />
                </Steps>
            </>
        )
    }
}
