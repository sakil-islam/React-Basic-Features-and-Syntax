import React from 'react';
import '../../stylesheets/Book.css';


// const Book = props => {
//     return (
//         <div>
//             <h3>Book:{props.bookName}</h3>
//             <h4>Write: {props.Write}</h4>
//         </div >
//     );
// }

// export default Book;


const Book = props => {
    console.log("i am from book");
    return (
        <div className="Book">
            <h3 onClick={props.delete}>Book: {props.bookName}</h3>
            <h4>Writer: {props.writer}</h4>
            <input type="text" onChange={props.inputName} value={props.bookName} />
        </div>

    );
}

export default Book;