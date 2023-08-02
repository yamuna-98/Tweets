const Comments = ({ displayComments }) => {
  return (
    <div className="comments-container">
      {displayComments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
    </div>
  );
};

export default Comments;
