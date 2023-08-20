import "./displayComments.style.scss";

const DisplayComments = ({ comments }) => {
  console.log({ comments });
  return (
    <div className="comments-container">
      {comments.map((comment, index) => {
        return (
          <div className="each-comment" key={index}>
            <span>{comment}</span>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayComments;
