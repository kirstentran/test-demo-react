//class component
//function component

import React from "react";
import UserInfor from "./UserInfor";

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

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        //bad code is this.state.age = event.target.value

        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    //JSX
    render() {
        return (
            <div>

                My name is {this.state.name} and I'm {this.state.age}

                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <label>Your name: </label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />

                    <label>Your age: </label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
                <UserInfor></UserInfor>
            </div >

        );
    }
}

export default MyComponent;
