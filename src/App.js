import "./App.css";
import { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DisplayPostBox from "./components/displayPostBox/displayPostBox.component";
import ContentPosted from "./components/contentPosted/contentPosted.component";

function App() {
  const [newPost, setNewPost] = useState(false);
  const [commentsContainer, setCommentsContainer] = useState(false);
  const [message, setMessage] = useState("");
  const [content, setContent] = useState([]);
  const [displayComments, setDisplayComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const displayPost = () => {
    setNewPost(true);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleClick = () => {
    if (message != "") {
      setNewPost(false);
      setContent([...content, message]);
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
    if (message !== "") {
      setCommentsContainer(false);
      setDisplayComments([[...displayComments, message]]);
    }
  };
  return (
    <div className="App">
      <header className="create-icon">
        <EditNoteIcon fontSize="large" onClick={displayPost} />
        <DisplayPostBox
          newPost={newPost}
          handleMessage={handleMessage}
          handleClick={handleClick}
          handleClearClick={handleClearClick}
        />
        <ContentPosted
          postData={content}
          newPost={newPost}
          handleComments={handleComments}
          commentsContainer={commentsContainer}
          handleMessage={handleMessage}
          handleClearComment={handleClearComment}
          displayCommentMsgs={displayCommentMsgs}
          selectedPostId={selectedPostId}
          displayComments={displayComments}
        />
      </header>
    </div>
  );
}

export default App;
