import "./displayComments.style.scss";

const DisplayComments = ({ comments }) => {
  console.log({ comments });
  return (
    <div className="comments-container">
      {comments.map((eachComment, index) => {
        return (
          <div className="each-comment" key={index}>
            <span>{eachComment.comment}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayComments;
