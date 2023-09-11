import EachTweet from "../EachTweet/eachTweet.component";
import "./tweetsList.style.scss";

const TweetsList = ({
  tweetsData,
  onHandleComment,
}) => {
  return (
    <div className="container">
      {tweetsData.map((tweet, index) => {
        return (
          <EachTweet
            tweet={tweet}
            key={index}
            onHandleComment={onHandleComment}
          />
        );
      })}
    </div>
  );
};

export default TweetsList;
