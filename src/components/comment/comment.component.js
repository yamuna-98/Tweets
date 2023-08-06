import "./comment.style.scss";

const Comment = ({ disableCommentPostButton, onCommentChange }) => {
  return (
    <div className="comment-box-container">
      <textarea
        className="user-comment"
        type="text"
        placeholder="Enter your comment"
        onChange={onCommentChange}
      ></textarea>
      <button
        className={
          disableCommentPostButton ? "disable_post_comment" : "post_comment"
        }
      >
        Post
      </button>
    </div>
  );
};

export default Comment;
