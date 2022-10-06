import React from "react";

const Bookitem = ({ title, image, author, amount }) => {
  return (
    <div className="book">
      <article>
        <img className="image-book" src={image} alt="" />

        <h1>{title}</h1>
        <h3>{author}</h3>
        <p>{amount}</p>
        <button>Buy Now</button>
      </article>
    </div>
  );
};

export default Bookitem;
