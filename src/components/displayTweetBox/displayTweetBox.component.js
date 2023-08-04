import "animate.css";
import "./displayTweetBox.style.scss";

const DisplayTweetBox = ({
  newPost,
  handleMessage,
  handleClick,
  handleClearClick,
  disabled
}) => {
  return (
      <div className="animate__animated animate__slideInDown post-container">
        <textarea
          onChange={handleMessage}
          placeholder="What's happening..."
          autoFocus
        ></textarea>
        <button className={ disabled ? 'disable_tweet_icon' : 'tweet_icon'} onClick={handleClick}>
          Tweet
        </button>
        <button className="close_icon" onClick={handleClearClick}>
          &times;
        </button>
      </div>
  );
};

export default DisplayTweetBox;
