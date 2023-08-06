import "./eachTweet.style.scss";
import { BiCommentDetail } from 'react-icons/bi';
import Comment from "../comment/comment.component";

const EachTweet = ({ tweet, showCommentBox, disableCommentBox, onCommentChange, disableCommentPostButton }) => {
  return (
    <div className="tweet-container">
      <div className="tweet-description">
        <span>{tweet.postDescription}</span>
      </div>
      <hr className="tweet-liner"/>
      <div className="icon-container">
        <div className="comment-icon-container" onClick={showCommentBox}>
          <BiCommentDetail className="comment-icon"/>
          <span>Comment</span>
        </div>
      </div>
      {
        !disableCommentBox && <Comment onCommentChange={onCommentChange} disableCommentPostButton={disableCommentPostButton} />
      }
    </div>
  );
};
export default EachTweet;
