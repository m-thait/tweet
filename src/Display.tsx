import React, { useState, useEffect } from "react";
import { TweetBox, Tweet } from "./TweetBox";
import "./TweetBox.module.scss";

export const Display = () => {

  const [tweets, setTweets] = useState<Tweet[]>([]);
  const test :Tweet[] = []

  // fetch all the titles of sample data and store in array to display later
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          if (response.ok) {
            const data = await response.json();
            const titles: Tweet[] = data.map((tweet: { title: string; id: number; }) => (
                                              {message: tweet.title,
                                                    id: tweet.id}));
            setTweets(titles)
          } else {
            console.error("Failed to fetch data");
          }
        } catch (error) {
          console.error("Error fetching data")
        }
      };

      fetchData();
    }, []);


  return (
    <>
      {tweets.map((tweet, id) => (
        <TweetBox
          data-testid="tweet-display"
          tweet={tweet}
          key={id}
        />
      ))}
    </>
  )
};
