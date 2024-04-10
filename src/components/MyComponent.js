//class component
//function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Kirsten',
        address: 'Uyen',
        age: 24
    };

    handleClick = (event) => {
        console.log(">> click me my button");

        //merge state only react class
        this.setState({
            name: 'Ky',
            age: Math.floor((Math.random() * 100) + 1)
        })

        // this.setState({

        // })
    }

    handleOnMoverOver(event) {
        // console.log(event.pageX)
    }
    //JSX
    render() {
        return (

            <div>
                My name is {this.state.name} and I'm {this.state.age}
                <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div >

        );
    }
}

export default MyComponent;
