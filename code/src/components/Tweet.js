/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import moment from 'moment';

const Tweet = ({ tweet }) => {
  const [counter, setCounter] = useState(tweet.hearts)
  console.log(`Heart count: ${counter}`)
  const handleLikeButton = (id) => {
    const ids = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch(`https://project-happy-thoughts-api-7jpb7hb2ja-lz.a.run.app/thoughts/${id}/like`, ids)
      .then((res) => {
        if (res.status === 200) {
          res.json()
            .then((likedTweet) => {
              console.log(`Request successful: ${JSON.stringify(likedTweet)}`)
              setCounter(likedTweet.hearts)
            })
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
            onClick={() => handleLikeButton(tweet._id)}>
            <span role="img" aria-label="heart">❤️</span>
          </button>
          <span className="like-counter"> x {counter}</span>
          <p className="date">{moment(tweet.createdAt).fromNow()}</p>
        </div>
      </div>
    </section>
  )
};

export default Tweet;