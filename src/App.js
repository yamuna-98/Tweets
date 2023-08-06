import "./App.css";
import { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DisplayTweetBox from "./components/displayTweetBox/displayTweetBox.component";
import TweetsList from "./components/TweetsList/tweetsList.component";

function App() {
  const [newPost, setNewPost] = useState(false);
  const [commentsContainer, setCommentsContainer] = useState(false);
  const [tweets, setTweets] = useState("");
  const [content, setContent] = useState([]);
  const [displayComments, setDisplayComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [disableCommentBox, setDisableCommentBox]  = useState(true);


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
    checkDisableAndSetState(e.target.value);
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
  }
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
  const handleComments = (postId) => {
    setCommentsContainer(true);
    setSelectedPostId(postId);
  };
  const handleClearComment = () => {
    setCommentsContainer(false);
  };
  const displayCommentMsgs = () => {
    if (tweets !== "") {
      setCommentsContainer(false);
      setDisplayComments([[...displayComments, tweets]]);
    }
  };
  const showCommentBox = () => {
    setDisableCommentBox(false);
  }
  return (
    <div className="App">
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
            handleComments={handleComments}
            commentsContainer={commentsContainer}
            handleMessage={handleMessage}
            handleClearComment={handleClearComment}
            displayCommentMsgs={displayCommentMsgs}
            showCommentBox={showCommentBox}
            onCommentChange={onCommentChange}
            disableCommentBox={disableCommentBox}
            selectedPostId={selectedPostId}
            displayComments={displayComments}
            disabled={disabled}
          />
        )}
      </header>
    </div>
  );
}

export default App;
