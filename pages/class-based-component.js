import React, { Component } from 'react';

class ClassBasedComponent extends Component {
    constructor(props) {super(props);}

    componentDidMount() {
        console.log('ClassBasedComponent has been mounted!')
    }

    render() {
        return (
            <div>I am a class component</div>
        )
        ;
    }
}

export default ClassBasedComponent;