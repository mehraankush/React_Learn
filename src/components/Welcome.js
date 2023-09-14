import React, { Component } from 'react';

class Welcome extends Component {
    render() {
        // console.log(this.props);
        //Deconstructor
        const {name, age} = this.props
        return (
            <div className='Welcome'>Welcome  {name}, you are {age}
            </div>
        )
    }
}

export default Welcome;