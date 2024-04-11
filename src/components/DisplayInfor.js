import React from 'react';

class DisplayInfor extends React.Component {
    render() {
        //destructering arr/obj
        const { age, name } = this.props;

        //props stands for properties
        return (
            <div>
                <div> My name is {this.props.name}</div>
                <div> My age is {this.props.age}</div>
            </div>
        );
    }
}

export default DisplayInfor;