import { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DisplayTweetBox from "../../components/displayTweetBox/displayTweetBox.component";
import TweetsList from "../../components/TweetsList/tweetsList.component";

const Home = () => {
  const [newPost, setNewPost] = useState(false);
  const [commentsContainer, setCommentsContainer] = useState(false);
  const [tweets, setTweets] = useState("");
  const [content, setContent] = useState([]);
  const [commentsMsg, setCommentsMsg] = useState("");
  // const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedCommentId, setSelectedCommentId] = useState(-1);
  const [disabled, setDisabled] = useState(true);
  const [disableCommentBox, setDisableCommentBox] = useState(true);

  const displayPost = () => {
    setNewPost(true);
  };
  const handleMessage = (e) => {
    setTweets(e.target.value);
    checkDisableAndSetState(e.target.value);
    // if (disabled && e.target.value !== "") {
    //   setDisabled(false);
    // }
    // if (e.target.value === "") {
    //   setDisabled(true);
    // }
  };

  const onCommentChange = (e) => {
    setCommentsMsg(e.target.value);
    checkDisableAndSetState(e.target.value);
    setSelectedCommentId(e.target.id);

    // if (disabled && e.target.value !== "") {
    //   setDisabled(false);
    // }
    // if (e.target.value === "") {
    //   setDisabled(true);
    // }
  };

  const checkDisableAndSetState = (val) => {
    if (disabled && val !== "") {
      setDisabled(false);
    }
    if (val === "") {
      setDisabled(true);
    }
  };
  const handleClick = () => {
    if (tweets != "") {
      setNewPost(false);
      setDisabled(true);
      const post = {
        id: content.length,
        postDescription: tweets,
        comments: [],
      };
      setContent([...content, post]);
    }
  };
  const handleClearClick = () => {
    setNewPost(false);
  };
  // const handleComments = (index) => {
  //   setSelectedPostId(index);
  // };
  const handleClearComment = () => {
    setCommentsContainer(false);
  };
  const displayCommentMsgs = () => {
    if (tweets !== "") {
      setCommentsContainer(false);
      setCommentsMsg([[...commentsMsg, tweets]]);
    }
  };
  const showCommentBox = () => {
    setDisableCommentBox(false);
  };
  const onHandleComment = (selectedCommentId) => {
    const updatedContent = content.map((post) => {
      if (selectedCommentId == post.id) {
        return {
          ...post,
          comments: [commentsMsg, ...post.comments],
        };
      }
      return post;
    });
    setContent(updatedContent);
    setCommentsMsg("");
    setDisabled(true);
  };
  return (
    <div>
      <header className="create-icon">
        <EditNoteIcon
          fontSize="large"
          onClick={displayPost}
          className="pencil_icon"
        />
        {newPost && (
          <DisplayTweetBox
            handleMessage={handleMessage}
            handleClick={handleClick}
            handleClearClick={handleClearClick}
            disabled={disabled}
          />
        )}

        {!newPost && (
          <TweetsList
            tweetsData={content}
            // handleComments={handleComments}
            commentsContainer={commentsContainer}
            selectedCommentId={selectedCommentId}
            handleMessage={handleMessage}
            handleClearComment={handleClearComment}
            displayCommentMsgs={displayCommentMsgs}
            showCommentBox={showCommentBox}
            onCommentChange={onCommentChange}
            disableCommentBox={disableCommentBox}
            // selectedPostId={selectedPostId}
            commentsMsg={commentsMsg}
            disabled={disabled}
            onHandleComment={(selectedCommentId) =>
              onHandleComment(selectedCommentId)
            }
          />
        )}
      </header>
    </div>
  );
};

export default Home;
