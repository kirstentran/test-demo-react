import React from 'react';

class UserInfor extends React.Component {
    state = {
        name: 'Kirsten',
        address: 'Uyen',
        age: 24
    };

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

    render() {
        return (
            <div> My name is {this.state.name} and I'm {this.state.age}

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
                </form></div >
        )
    }
}

export default UserInfor;