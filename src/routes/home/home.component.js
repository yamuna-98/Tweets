import { useState } from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DisplayTweetBox from "../../components/displayTweetBox/displayTweetBox.component";
import TweetsList from "../../components/TweetsList/tweetsList.component";
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [newPost, setNewPost] = useState(false);
  const [tweets, setTweets] = useState("");
  const [content, setContent] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const displayPost = () => {
    setNewPost(true);
  };

  const handleMessage = (e) => {
    setTweets(e.target.value);
    checkDisableAndSetState(e.target.value);
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
    if (tweets !== "") {
      setNewPost(false);
      setDisabled(true);
      const post = {
        id: uuidv4(),
        postDescription: tweets,
        comments: [],
      };
      setContent([...content, post]);
    }
  };

  const handleClearClick = () => {
    setNewPost(false);
  };

  const onHandleComment = (commentPostId, commentText) => {
    const updatedContent = content.map((post) => {
      if (commentPostId === post.id) {
        return {
          ...post,
          comments: [
            {
              commentId: uuidv4(),
              comment: commentText
            },
            ...post.comments
          ],
        };
      }
      return post;
    });
    setContent(updatedContent);
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
            onHandleComment={onHandleComment}
          />
        )}
      </header>
    </div>
  );
};

export default Home;
