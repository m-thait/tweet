import { FC} from "react";
import "./TweetBox.css";

export interface Tweet {
  message: string
}

export const TweetBox: FC<{tweet: Tweet}> = ({tweet:{message}}) => { // destructor value of Tweet
  // console.log(id)
// export const TweetBox = () => {
  return (
    <div className="container">
      <div className="whitebox">
        <div className="tweet">
          {/* <p> What's happening? </p> */}
          {message}
        </div>
        <div className="privacy">
          <i className="fas fa-globe-asia"></i>
          <span> Everyone can reply</span>
        </div>
        <div className="bottom">
          <div className="icons">
            <i className="fas fa-expand"></i>
            <i className="far fa-file-image"></i>
            <i className="fas fa-map-marker-alt"></i>
            <i className="far fa-grin"></i>
            <i className="far fa-user"></i>
          </div>
          <div className="right">
            <span className="count"> 145 </span>
            <button className="button"> Tweet </button>
          </div>
        </div>
      </div>
    </div>
  );
};
