import { getByTestId, render, screen } from '@testing-library/react';
import { TweetBox, Tweet } from '../TweetBox';

describe("TweetBox", () => {
    it("should render message successfully given a message and id", () => {
        const mockTweet: Tweet[] = [{
            message: "hi",
            id: 1
        }]
        render(<TweetBox tweet={mockTweet[0]}/>);
        const text = screen.getByText("hi");
        expect(text).toBeInTheDocument();
        expect(mockTweet[0]).toHaveProperty('message');
        expect(mockTweet[0]).toHaveProperty('id');
    });

    it("should render message successfully given only a message w/ no id", () => {
        const noIDTweet: Tweet[] = [{
            message: "hi"
        }]
        render(<TweetBox tweet={noIDTweet[0]}/>)
        const text = screen.getByText("hi");
        expect(text).toBeInTheDocument();
        expect(noIDTweet[0]).toHaveProperty('message');
    });

    it("should render empty tweetbox successfully given an empty message", () => {
        const emptyTweet: Tweet[] = [{message: ""}]
        render(<TweetBox tweet={emptyTweet[0]}/>);
        expect(emptyTweet[0]).toHaveProperty('message');
        expect(emptyTweet[0].message).toBe("");
    });
})

describe("TweetBox JSON", () => {
    const jsonData = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        }
    ]

    it("should render one record from JSON data successfully", () => {
        const convertedTweet: Tweet[] = jsonData.map((tweet: {title: string; id: number; }) => (
            {message: tweet.title,
                  id: tweet.id}
        ))
        render(<TweetBox tweet={convertedTweet[0]}/>);
        const m = screen.getByText("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
        expect(m).toBeInTheDocument();
        const n = screen.queryByText("qui est esse");
        expect(n).not.toBeInTheDocument();
    });

});