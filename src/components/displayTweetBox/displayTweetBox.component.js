import "animate.css";
import "./displayTweetBox.style.css";

const DisplayTweetBox = ({
  newPost,
  handleMessage,
  handleClick,
  handleClearClick,
}) => {
  return (
    <div className="tweetBoxContainer">
      {
        <div className="animate__animated animate__slideInDown post-container">
          <textarea
            onChange={handleMessage}
            placeholder="What's happening..."
            autoFocus
          ></textarea>
          <button className="tweet_icon" onClick={handleClick}>
            Tweet
          </button>
          <button className="close_icon" onClick={handleClearClick}>
            &times;
          </button>
        </div>
      }
    </div>
  );
};

export default DisplayTweetBox;
