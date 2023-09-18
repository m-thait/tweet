import { render, screen } from '@testing-library/react';
import { TweetBox, Tweet } from '../TweetBox';
import { Display } from '../Display';
import { toBeInTheDocument } from '@testing-library/jest-dom/matchers';

const mockTweets: Tweet[] = [{
    message: "hi"
}, {
    message: "bye"
}, {
    message: "ok"
}]

const jsonData = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
]

test("TweetBox renders one message successfully", () => {
    render(<>{<TweetBox tweet={mockTweets[0]}/>}</>);
    const m = screen.getByText("hi");
    expect(m).toBeInTheDocument();
})

test("TweetBox renders all messages successfully", () => {
    render(
    <>
        {mockTweets.map((tweet) => (<TweetBox tweet={tweet}/>))}
    </>);
    const m1 = screen.getByText("hi");
    expect(m1).toBeInTheDocument();
    const m2 = screen.getByText("bye");
    expect(m2).toBeInTheDocument();
    const m3 = screen.getByText("ok");
    expect(m3).toBeInTheDocument(); 
    expect(mockTweets.length).toBe(3);  
})

test("Tweetbox renders one record from JSON data successfully", () => {
    const t: Tweet[] = jsonData.map((tweet: {title: string; }) => (
                            {message: tweet.title}
    ))
    render(
    <>
    {<TweetBox tweet={t[0]}/>}
    </>);
    const m = screen.getByText("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    expect(m).toBeInTheDocument();
    const n = screen.queryByText("qui est esse");
    expect(n).not.toBeInTheDocument();
})

test("Tweetbox renders all records from JSON data successfully", () => {
    const t: Tweet[] = jsonData.map((tweet: {title: string; }) => (
                            {message: tweet.title}
    ))
    render(
    <>
    {t.map((m) => (
        <TweetBox tweet={m}/>
    ))}
    </>);
    const m1 = screen.getByText("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    expect(m1).toBeInTheDocument();
    const m2 = screen.getByText("qui est esse");
    expect(m2).toBeInTheDocument();
    expect(t.length).toBe(2);
})

// test("Tweetbox contains the tweet property", () => {
//     render(
//     <>

//     </>);
// })