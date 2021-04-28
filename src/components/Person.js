import React, { Component } from 'react';


//Normal function use:
// function Person() {
//     return (
//       <div>
//         <h1>I Am Sakil Islam</h1>
//       </div>
//     );
//     //return React.createElement('div', null, React.createElement('h1', null, "I am person component"));
//   }


//Arrow function use:
let Person = (props) => {
    return(
        <div>
            {/* <h1>Number: {Math.random()}</h1> */}
            <h3>Name: {props.name} and Age: {props.age} years</h3>
        </div>
        )
}


//Class component use:
// class Person extends Component {
//     constructor(props) {
//         super(props);
//     }
//     render(){
//         return (
//             <div>
//                 <h3>Name: {this.props.name} and Age: {this.props.age} years</h3>
//             </div>
//         );
//     }
// }


export default Person;