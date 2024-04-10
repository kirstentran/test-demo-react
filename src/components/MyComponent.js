//class component
//function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Kirsten',
        address: 'Uyen',
        age: 24
    };

    handleClick(event) {
        console.log(">> click me my button");
        // console.log(event)
    }

    handleOneMoverOver(event) {
        console.log(event.pageX)
    }
    //JSX
    render() {
        return (

            <div>
                My name is {this.state.name} and I'm from {this.state.address}
                <button onMouseOver={this.handleOneMoverOver}>Hover me</button>
                <button onClick={this.handleClick}>Click me</button>
            </div>

        );
    }
}

export default MyComponent;
