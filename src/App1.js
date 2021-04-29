// import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Person from './components/Person';
import Book from './components/representational/Book';


// JSX Functional Component
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!!!!!!!</h1>
//       <Person />
//     </div>
//   );
//   //return React.createElement('div', { className: "App" }, React.createElement('h1', null, "Hello World"), );
// }
// Class Component
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Hello World!</h1>
//         <Person name="sakil" age="24" />
//         <Person name="sakil" age="24" />
//         <Person name="sakil" age="24" />
//       </div>
//     );
//   }
// }


class App extends Component {
  state = {
    books: [
      { bookName: "1984", writer: "George Orwell" },
      { bookName: "The Da Vinci Code", writer: "Dan Brown" },
      { bookName: "The Alchemist", writer: "Paulo Coelho" }
    ],
    otherProp: "I am some other Prop"
  }

  changeBookState = () => {
    // Wrong: this.state.books[0].bookName = "1974" 
    this.setState({
      books: [
        { bookName: "Nineteen Eighty-Four", writer: "George Orwell" },
        { bookName: "The Da Vinci Code", writer: "Dan Brown" },
        { bookName: "Metmorphosis", writer: "Franz Kafka" }
      ]
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>Book List</h1>
        <button onClick={this.changeBookState}>Change State</button>
        <Book
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer} />
        <Book
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer} />
        <Book
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer} />
      </div>
    );
  }
}


export default App;