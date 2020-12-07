import React, {Component} from 'react';
import {InlineWidget} from 'react-calendly'

class Calendly extends Component {
    componentDidMount() {
        document.title = "Sign Up | Edge Learning";
    }
    componentWillUnmount() {
        // whatever cleanup stuff you need here
    }
    render(){
        return (
        <div>
            <InlineWidget url="https://calendly.com/project-edge" />
        </div>
        );
    }
}

export default Calendly