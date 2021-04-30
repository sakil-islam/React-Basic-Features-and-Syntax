import React, { Component } from 'react';
import BookList from './lists/BookList';
import bookList from '../assets/bookList';
import NewBook from './representational/NewBook';
import { Route, NavLink } from 'react-router-dom';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: bookList
        }
    }

    changeWithInputState = (event, index) => {
        const book = {
            ...this.state.books[index]
        }
        book.bookName = event.target.value;
        const books = [...this.state.books];
        books[index] = book;

        this.setState({ books: books });
    }

    deleteBookState = index => {
        //const books = this.state.books.slice();
        //const books = this.state.books.map(item => item);
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books
        });
    };

    // toggleBooks = () => {
    //     this.setState({ showBooks: !this.state.showBooks });
    // }

    render() {
        // const style = {
        //     border: "1px solid red",
        //     borderRadius: "5px",
        //     backgroundColor: "black",
        //     color: "white",
        // };

        //const booksState = this.state.books;
        // let books = null;
        // if (this.state.showBooks) {
        const books = <BookList
            books={this.state.books}
            deleteBookState={this.deleteBookState}
            changeWithInputState={this.changeWithInputState}
        />
        //console.log(booksState);
        // console.log(books);

        return (
            <div className="App">
                <nav className="nav-bar">
                    <ul>
                        <li>
                            <NavLink to="/" exact >Home</NavLink>
                        </li>
                        <li><NavLink to="/new-book">New Book</NavLink></li>
                    </ul>
                </nav>
                {/* <h1 style={style}>Book List</h1>
                <button onClick={this.toggleBooks}>Toggle Books</button> */}
                {/* {books}
                <NewBook /> */}
                <Route path="/" exact render={() => books} />
                <Route path="/new-book" exact component={NewBook} />
            </div>
        );
    }
}
export default MainComponent;