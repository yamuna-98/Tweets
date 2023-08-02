import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";
import Textarea from "@mui/joy/Textarea";
import SendIcon from "@mui/icons-material/Send";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Comments from "../comments/comments.component";
import "./contentPosted.style.css";

const ContentPosted = ({
  newPost,
  postData,
  handleComments,
  commentsContainer,
  handleMessage,
  handleClearComment,
  displayCommentMsgs,
  selectedPostId,
  displayComments,
}) => {
  console.log(selectedPostId);
  return (
    <div className="container">
      {!newPost &&
        postData.map((post, index) => (
          <div key={index}>
            <p className="item">
              {post}
              <ModeCommentOutlinedIcon
                className="comment-box"
                onClick={() => handleComments(index)}
              />
            </p>
            {selectedPostId === index && commentsContainer && (
              <div className="animate__animated animate__slideInDown post-container">
                <Textarea
                  name="Solid"
                  placeholder="Type in here…"
                  variant="soft"
                  onChange={handleMessage}
                />
                <SendIcon
                  className="send_icon"
                  onClick={displayCommentMsgs}
                ></SendIcon>
                <ClearOutlinedIcon
                  className="cancel"
                  onClick={handleClearComment}
                />
              </div>
            )}
          </div>
        ))}
      <Comments displayComments={displayComments} />
    </div>
  );
};

export default ContentPosted;
