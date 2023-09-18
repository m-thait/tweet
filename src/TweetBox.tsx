import { FC} from "react";
import styles from "./TweetBox.module.scss";

export interface Tweet {
  message: string
}

export const TweetBox: FC<{tweet: Tweet}> = ({tweet:{message}}) => {
  return (
    <div className={styles.container}>
      <div className={styles.whitebox}>
        <div data-testid="tweet-message" className={styles.tweet}>
          {message}
        </div>
        <div className={styles.privacy}>
          <i className="fas fa-globe-asia"></i>
          <span> Everyone can reply</span>
        </div>
        <div className={styles.bottom}>
          <div className={styles.icons}>
            <i className="fas fa-expand"></i>
            <i className="far fa-file-image"></i>
            <i className="fas fa-map-marker-alt"></i>
            <i className="far fa-grin"></i>
            <i className="far fa-user"></i>
          </div>
          <div className={styles.right}>
            <span className={styles.count}> 145 </span>
            <button className="button"> Tweet </button>
          </div>
        </div>
      </div>
    </div>
  );
};
