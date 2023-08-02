import Textarea from "@mui/joy/Textarea";
import SendIcon from "@mui/icons-material/Send";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import "animate.css";
import "./displayPostBox.css";

const DisplayPostBox = ({
  newPost,
  handleMessage,
  handleClick,
  handleClearClick,
}) => {
  return (
    <div className="container">
      {newPost && (
        <div className="animate__animated animate__slideInDown post-container">
          <Textarea
            name="Solid"
            placeholder="Type in here…"
            variant="soft"
            onChange={handleMessage}
          />
          <SendIcon className="send_icon" onClick={handleClick}></SendIcon>
          <ClearOutlinedIcon className="cancel" onClick={handleClearClick} />
        </div>
      )}
    </div>
  );
};

export default DisplayPostBox;
