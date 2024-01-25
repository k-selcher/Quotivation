import React from "react";

function QuoteCard({ quote }) {
  return (
    <article className='quote-card'>
      <div>
        <h3 className="categories">
          {quote.categories.map((category) => (
            <span className="category" key={category}>{category}</span>
          ))}
        </h3>
        <h3>{quote.text}</h3>
      </div>
      <footer>
        <p className='author'>{quote.author}</p>
      </footer>
    </article>
  );
}

export default QuoteCard;

