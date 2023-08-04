import "./eachTweet.style.scss";

const EachTweet = ({ tweet }) => {
  console.log(tweet);
  return (
    <div className="tweet-container">
      <span className="tweet-description">{tweet.postDescription}</span>

      {/* <p className="tweet-description">{tweet.postDescription}</p> */}
      {/* <hr /> */}
    </div>
  );
};
export default EachTweet;
