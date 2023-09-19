import { Display } from '../Display';
import { TweetBox, Tweet } from '../TweetBox';
import { getByTestId, render, screen } from '@testing-library/react';

const mockTweets: Tweet[] = [{
    message: "hi",
    id: 1
}, {
    message: "bye",
    id: 2
}, {
    message: "ok",
    id: 3
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

test("TweetBox renders all messages successfully", () => {
    render(
    <>
    {mockTweets.map((tweet) => (<TweetBox tweet={tweet} key={tweet.id}/>))}
    </>);
    const m1 = screen.getByText("hi");
    expect(m1).toBeInTheDocument();
    const m2 = screen.getByText("bye");
    expect(m2).toBeInTheDocument();
    const m3 = screen.getByText("ok");
    expect(m3).toBeInTheDocument(); 
    expect(mockTweets.length).toBe(3);  
})

test("Tweetbox renders all records from JSON data successfully", () => {
    const t: Tweet[] = jsonData.map((tweet: {title: string; id: number; }) => (
                            {message: tweet.title,
                                  id: tweet.id}
    ))
    render(
    <>
    {t.map((m, i) => (
        <TweetBox tweet={m} key={i}/>
    ))}
    </>);
    const m1 = screen.getByText("sunt aut facere repellat provident occaecati excepturi optio reprehenderit");
    expect(m1).toBeInTheDocument();
    const m2 = screen.getByText("qui est esse");
    expect(m2).toBeInTheDocument();
    expect(t.length).toBe(2);
})

// test("Testing API calls successfully", () => {
//     const mockFetchData = jest.spyOn(services, 'Display')
//     .mockImplementation();
//     render(<Display/>);
//     expect(mockFetchData).toHaveBeenCalled();
// })