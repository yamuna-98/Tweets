import EachTweet from "../EachTweet/eachTweet.component";
import "./tweetsList.style.scss";

const TweetsList = ({
  tweetsData,
  showCommentBox,
  // handleComments,
  // selectedPostId,
  disableCommentBox,
  disabled,
  onCommentChange,
  selectedCommentId,
  onHandleComment,
  commentsMsg,
}) => {
  return (
    <div className="container">
      {tweetsData.map((tweet, index) => {
        return (
          <EachTweet
            tweet={tweet}
            showCommentBox={showCommentBox}
            disableCommentBox={disableCommentBox}
            disableCommentPostButton={disabled}
            onCommentChange={onCommentChange}
            commentsMsg={commentsMsg}
            tweetIdx={index}
            selectedCommentId={selectedCommentId}
            key={index}
            onHandleComment={(selectedCommentId) =>
              onHandleComment(selectedCommentId)
            }
          />
        );
      })}
    </div>
  );
};

export default TweetsList;
