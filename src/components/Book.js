import React from "react";
import Bookitem from "./Bookitem";
import { GiPenguin } from "react-icons/gi";

const Books = [
  {
    id: 1,
    title: "Rich Dad and Poor Dad",
    author: "Robert T. Kiyosaki",
    image: "https://m.media-amazon.com/images/I/81ZLwAwD-ML.jpg",
    amount: 5000,
  },
  {
    id: 2,
    title: "The Pshychology of Money",
    author: "Morgen Housel",
    image: "https://m.media-amazon.com/images/I/71g2ednj0JL.jpg",
    amount: 3400,
  },
  {
    id: 3,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
    amount: 2400,
  },
  {
    id: 4,
    title: "Its Starts With Us ",
    author: "Coolean Hoover",
    image: "https://m.media-amazon.com/images/I/81FummIc2eL.jpg",
    amount: 6700,
  },
  {
    id: 5,
    title: "It Ends With Us",
    author: "Coolean Hoover",
    image: "https://m.media-amazon.com/images/I/711cvCcahjL.jpg",
    amount: 3460,
  },
  {
    id: 6,
    title: "The Subtle Art Of Not Giving A F*ck",
    author: "Mark Manson",
    image: "https://m.media-amazon.com/images/I/814jC+rODgL.jpg",
    amount: 2320,
  },
  {
    id: 7,
    title: "Do Epic Shit",
    author: "Ankoor Warikoo",
    image: "https://m.media-amazon.com/images/I/61kRkfsIMUL.jpg",
    amount: 1230,
  },
  {
    id: 8,
    title: "Grandma's Bag Of Stories",
    author: "Sudha Murthy",
    image: "https://m.media-amazon.com/images/I/81jv44QdNwL.jpg",
    amount: 2120,
  },
];

const Book = () => {
  return (
    <div>
      <nav className="nav">
        <GiPenguin className="icon" />
        <h2>Penguin Store</h2>
      </nav>
      <section>
        {Books.map((item) => {
          return (
            <Bookitem
              key={item.id}
              title={item.title}
              author={item.author}
              image={item.image}
              amount={"Rs " + item.amount}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Book;
