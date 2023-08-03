import "./eachTweet.style.css";

const EachTweet = ({ tweet }) => {
  console.log(tweet);
  return (
    <div className="tweet-container">
      <p>{tweet.postDescription}</p>
      <hr />
    </div>
  );
};
export default EachTweet;
