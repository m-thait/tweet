import React, { useState, useEffect } from "react";
import { TweetBox, Tweet } from "./TweetBox";

export const Table = () => {

  const [tweets, setTweets] = useState<Tweet[]>([]);
  
//   const messages: any[] = [{
//     message: "Hello"
//   }, {
//     message: "How are you"
//   }, {
//     message: "Hi"
//   }, {
//     message: "Bye"
//   }, {
//     message: "OMG"
//   }
// ]

  // fetch all the titles of sample data and store in array
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          if (response.ok) {
            const data = await response.json();
            const titles: Tweet[] = data.map((tweet: { title: string; }) => (
                                    {message: tweet.title}));
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
      {/* TODO: Render a tweet message that looks exactly like the one provided */}
      {/* {TweetBox(messages[0])} */}

      {/* TODO: Iterate through array to render different tweet messages */}
      {/* {messages.map(({message}) => (
                  <TweetBox
                    message={message}
                  />
                ))} */}

      {/* TODO: Use sample API to fetch data and use its title for tweet */}
      {tweets.map((tweet) => (
        <TweetBox
        tweet={tweet}
        />
      ))}
        
    </>
  )
};
