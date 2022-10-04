/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';

const Tweet = ({ tweet }) => {
  const [counter, setCounter] = useState(tweet.hearts)
  console.log(tweet)
  const handleLikeButton = (id) => {
    const ids = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, ids)
      // eslint-disable-next-line no-return-assign
      .then((res) => {
        if (res.status === 200) {
          console.log('Request successful')
          setCounter(tweet.hearts += 1)
        }
      }) // it's a callback
  };

  return (
    <section className="like-button-container">
      <div className="like-content">
        <p key={tweet._id}>{tweet.message}</p>
        <div className="info-like">
          <button
            className={tweet.hearts > 0 ? 'button-heart clicked' : 'button-heart'}
            // eslint-disable-next-line no-underscore-dangle
            onClick={() => handleLikeButton(tweet._id)}>
            <span role="img" aria-label="heart">❤️</span>
          </button>
          <span className="like-counter"> x {counter}</span>
        </div>
      </div>
    </section>
  )
};

export default Tweet;