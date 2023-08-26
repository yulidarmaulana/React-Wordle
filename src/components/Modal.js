import React from "react";

export default function Modal({ isCorrect, turn, solution }) {

    function refreshPage() {
        window.location.reload(false);
      }

  return (
    <div className="modal" onClick={refreshPage}>
      {isCorrect && (
        <div>
          <h1>You won!</h1>
          <p className="solution">The word was: {solution}</p>
          <p className="turn">It took you {turn} guesses</p>
        </div>
      )}
      ,
      {!isCorrect && (
        <div>
          <h1>You lost!</h1>
          <p className="solution">The word was: {solution}</p>
          <p>better luck next time</p>
        </div>
      )}
    </div>
  );
}
