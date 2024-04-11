import React from 'react';

class DisplayInfor extends React.Component {
    render() {
        //destructering arr/obj
        const { listUsers } = this.props; //object
        console.log(listUsers)
        //=const listUsers =this.props.listUsers;

        //props stands for properties
        return (
            <div>
                {listUsers.map((user, index) => {
                    return (
                        <div key={user.id}>
                            <div> My name is {user.name}</div>
                            <div> My age is {user.age}</div>
                            <hr />
                        </div>
                    )
                })}
                {/* <div> My name is {name}</div>
                <div> My age is {age}</div>
                <hr></hr>
                <div> My name is {name}</div>
                <div> My age is {age}</div>
                <hr></hr>
                <div> My name is {name}</div>
                <div> My age is {age}</div> */}
            </div>
        )
    }
}

export default DisplayInfor;