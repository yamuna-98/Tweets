import "./comment.style.scss";
import { useEffect, useRef, useState } from "react";

const Comment = ({
  tweetId,
  onHandleComment,
}) => {
  const textareaRef = useRef(null);
  const [disableCommentPostButton, setDisableCommentPostButton] = useState(true);
  const [currentCommentText, setCurrentCommentText] = useState("");
  const [commentId, setCommentId] = useState(0);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea && currentCommentText !== "") {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    } else {
      textarea.style.height = "25px";
    }
  }, [currentCommentText]);

  const handleTextChange = (event) => {
    const { value: text, id } = event.target
    if(text !== "") {
      setDisableCommentPostButton(false)
      setCommentId(id)
    }
    else {
      setDisableCommentPostButton(true)
    }
    setCurrentCommentText(text)
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
          id={tweetId}
          value={currentCommentText}
        ></textarea>
      </div>
      <div className="post-btn">
        <button
          className={
            !disableCommentPostButton && tweetId === commentId
              ? "post_comment"
              : "disable_post_comment"
          }
          onClick={(e) => {
            setDisableCommentPostButton(true)
            setCurrentCommentText("")
            onHandleComment(commentId, currentCommentText);
          }}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default Comment;
