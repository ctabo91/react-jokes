import React from "react";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

function Joke({ id, vote, votes, text }) {
  const upVote = e => vote(id, +1);
  const downVote = e => vote(id, -1);

  return (
    <div className="Joke">
      <div className="Joke-votearea">
        <button onClick={upVote}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={downVote}>
          <i className="fas fa-thumbs-down" />
        </button>

        {votes}
      </div>

      <div className="Joke-text">{text}</div>
    </div>
  );
}


export default Joke;
