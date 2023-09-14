import React, {Component} from 'react'

 class ClassEvent extends Component{
   
    classClickHandler() {
        console.log("you click the button");
    }   
    render(){
        return (
            <div >
                <button onClick={this.classClickHandler}>
                     Hover me
                </button>
            </div>
       )
    }
 
}

export default ClassEvent;
