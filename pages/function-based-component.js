import React, { useEffect } from 'react';

const FunctionBasedComponent = () => {
    useEffect(() => {
        console.log('FunctionBasedComponent \'s effect has been fired');
    }, []);

    return (
        <div>I am a functional component</div>
    );
};

export default FunctionBasedComponent;