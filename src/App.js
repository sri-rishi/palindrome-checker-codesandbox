import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  let [string, setString] = useState("");
  let [stringChecker, setStringChecker] = useState("");
  let [varify, setVarify] = useState("");

  const inputHandler = (event) => {
    string = event.target.value;
    stringChecker = event.target.value;
  };

  const clickHandler = () => {
    setString(string);
    setStringChecker(stringChecker);

    stringChecker = stringChecker.split("").reverse().join("");
    if (isNaN(string)) {
      setVarify("Please enter number");
    } else {
      if (string === stringChecker) {
        setVarify("its a palindrome");
      } else {
        setVarify("not a palindrome");
      }
    }
  };

  return (
    <div className="App">
      <h1>Palindrome Checker</h1>
      <input
        onChange={inputHandler}
        placeholder="Enter number to check palindrome"
      />
      <button onClick={() => clickHandler()}>Check</button>
      <div className="stringDiv">{string}</div>
      <div className="varifyDiv">{varify}</div>

      <footer>
        <p className="about">About</p>
        <p>
          A <a href="https://en.wikipedia.org/wiki/Palindrome">palindrome</a> is
          a word, number, phrase, or other sequence of characters which reads
          the same backward as forward, such as madam, racecar. There are also
          numeric palindromes, including date/time stamps using short digits
          11/11/11 11:11 and long digits 02/02/2020.
          <p>
            Enter your string/number to and check it's a panlindrome or not.
          </p>
        </p>
        <p>
          Made by{" "}
          <a href="https://rishiportfolio.netlify.app/">Rishi Srivastava</a>
        </p>
      </footer>
    </div>
  );
}
