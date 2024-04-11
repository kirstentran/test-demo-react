//class component
//function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {

    state = {
        listUsers: [
            { id: 1, name: "Kirsten", age: "28" },
            { id: 2, name: "Ky", age: "21" },
            { id: 3, name: "Uyen", age: "8" }
        ]
    }


    //JSX
    render() {
        return (
            //DRY
            <div>
                <UserInfor></UserInfor>
                <br></br>
                <DisplayInfor
                    listUsers={this.state.listUsers} />
            </div >
        );
    }

}

export default MyComponent;
