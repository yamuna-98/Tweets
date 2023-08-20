import "./comment.style.scss";
import { useEffect, useRef } from "react";
const Comment = ({
  disableCommentPostButton,
  onCommentChange,
  tweetIdx,
  selectedCommentId,
  onHandleComment,
  commentsMsg,
}) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    console.log(textarea.scrollHeight);
    if (textarea && commentsMsg !== "") {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    } else {
      textarea.style.height = "25px";
    }
  }, [commentsMsg]);

  const handleTextChange = (event) => {
    onCommentChange(event);
  };
  return (
    <div className="comments-section">
      <div className="comment-box-container">
        <textarea
          ref={textareaRef}
          className="user-comment"
          type="text"
          placeholder="Enter your comment"
          onChange={handleTextChange}
          id={tweetIdx}
          value={commentsMsg}
        ></textarea>
      </div>
      <div className="post-btn">
        <button
          className={
            !disableCommentPostButton && tweetIdx == selectedCommentId
              ? "post_comment"
              : "disable_post_comment"
          }
          onClick={() => {
            onHandleComment(selectedCommentId);
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Comment;
