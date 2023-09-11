import "./eachTweet.style.scss";
import { BiCommentDetail } from "react-icons/bi";
import Comment from "../comment/comment.component";
import DisplayComments from "../displayComments/displayComments.component";
import { useState } from "react";

const EachTweet = ({
  tweet,
  onHandleComment,
}) => {

  const [disableCommentBox, setDisableCommentBox] = useState(true);

  const showCommentBox = () => {
    setDisableCommentBox(false);
  };

  return (
    <div className="tweet-container">
      <div className="tweet-description">
        <span>{tweet.postDescription}</span>
      </div>
      <hr className="tweet-liner" />
      <div className="icon-container">
        <div className="comment-icon-container" onClick={showCommentBox}>
          <BiCommentDetail className="comment-icon" />
          <span>Comment</span>
        </div>
      </div>
      {!disableCommentBox && (
        <Comment
          tweetId={tweet.id}
          onHandleComment={onHandleComment}
        />
      )}
      {!disableCommentBox && tweet.comments.length > 0 && (
        <DisplayComments comments={tweet.comments} />
      )}
    </div>
  );
};
export default EachTweet;
