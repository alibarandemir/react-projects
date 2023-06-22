import React from 'react'
import { useState,useEffect } from 'react';
function QuoteBox(props) {


  return (
    <div id="quote-box">
        <p id='text'>{props.text}</p>
        <p id='author'>{props.author}</p>
        <button id='new-quote'>New Quote</button>
        <a id='tweet-quote' href='twitter.com/intent/tweet' target="_blank"></a>
    </div>
  )
}

export default QuoteBox;