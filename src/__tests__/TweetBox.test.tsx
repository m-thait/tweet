import { render, screen } from '@testing-library/react';
import { TweetBox, Tweet } from '../TweetBox';
import { Display } from '../Display';

const mockTweets: Tweet[] = [{
    message: "hi"
}, {
    message: "bye"
}, {
    message: "ok"
}]

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
