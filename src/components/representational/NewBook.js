// import React, { Component } from 'react';

// class NewBook extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             bookName: "",
//             writer: "",
//             description: ""
//         }
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleSubmit = event => {
//         console.log(this.state);
//         event.preventDefault();
//     }

//     handleInputChange = event => {
//         const name = event.target.name;
//         const value = event.target.value;

//         this.setState({
//             [name]: value
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>New Book Entry</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>Book Name: </label>
//                     <br />
//                     <input type="text" name="bookName" value={this.state.bookName}
//                         onChange={this.handleInputChange} />
//                     <br />
//                     <label>Writer: </label>
//                     <br />
//                     <input type="text" name="writer" value={this.state.writer} onChange={this.handleInputChange} />
//                     <br />
//                     <label>Description: </label>
//                     <br />
//                     <textarea name="description" value={this.state.description} onChange={this.handleInputChange} />
//                     <br />
//                     <input type="submit" value="Submit" />
//                 </form>
//             </div >
//         );
//     }
// }

// export default NewBook;


//Uncontrolled form
import React, { Component } from 'react';

class NewBook extends Component {
    constructor(props) {
        super(props);
        this.bookName = React.createRef();
        this.writer = React.createRef();
        this.description = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = event => {
        console.log(this.bookName.current.value);
        console.log(this.writer.current.value);
        console.log(this.description.current.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>New Book Entry</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Book Name: </label>
                    <br />
                    <input type="text" name="bookName" ref={this.bookName} />
                    <br />
                    <label>Writer: </label>
                    <br />
                    <input type="text" name="writer" ref={this.writer} />
                    <br />
                    <label>Description: </label>
                    <br />
                    <textarea name="description" ref={this.description} />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div >
        );
    }
}

export default NewBook;