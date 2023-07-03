import { useEffect, useState } from "react";
import "./styles.css";
import { FaTwitter } from "react-icons/fa";

export default function App() {
  const [quote, setQuote] = useState({});
  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = async () => {
    var selectedValue = await document.getElementById("selected").value;
    const url = `https://api.api-ninjas.com/v1/quotes?category=${selectedValue}`;
    const options = {
      method: "GET",
      headers: {
        "X-Api-Key": "PjCq0y7zgoZ5wfsjQEkjFg==RxAgRMcUKNJFz4rF",
      },
    };
    const api = await fetch(url, options);
    const response = await api.json();

    setQuote(response[0]);
  };
  return (
    <div className="App">
      <div id="quote-box">
        <p id="text">{quote.quote}</p>
        <p id="author">{quote.author}</p>
        <a
          href={
            "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
            quote.quote
          }
          id="tweet-quote"
        >
          <FaTwitter />
        </a>
        <select id="selected">
          <option value="best" selected>
            Best
          </option>
          <option value="business">Business</option>
          <option value="life">Life</option>
        </select>
        <button id="new-quote" onClick={getQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}
