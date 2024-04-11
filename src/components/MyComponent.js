//class component
//function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {



    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    //JSX
    render() {
        const myInfo = ['ab', 'hb', 'jg'];
        return (
            <div>
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfor name="Kirsten" age="28" />
                <hr></hr>
                <DisplayInfor name="Ky" info={myInfo} age={36} />

            </div >

        );
    }
}

export default MyComponent;
