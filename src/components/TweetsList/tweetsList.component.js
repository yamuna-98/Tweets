import EachTweet from "../EachTweet/eachTweet.component";
import "./tweetsList.style.css";

const TweetsList = ({ newPost, tweetsData }) => {
  return (
    <div className="container">
      {tweetsData.map((tweet, index) => {
        return <EachTweet tweet={tweet} key={index} />;
      })}
    </div>
  );
};

export default TweetsList;

// {selectedPostId === index && commentsContainer && (
//   <div className="animate__animated animate__slideInDown post-container">
//     <Textarea
//       name="Solid"
//       placeholder="Type in here…"
//       variant="soft"
//       onChange={handleMessage}
//     />
//     <SendIcon
//       className="send_icon"
//       onClick={displayCommentMsgs}
//     ></SendIcon>
//     <ClearOutlinedIcon
//       className="cancel"
//       onClick={handleClearComment}
//     />
//   </div>
// )}
{
  /* <ModeCommentOutlinedIcon
                className="comment-box"
                onClick={() => handleComments(index)}
              /> */
}
