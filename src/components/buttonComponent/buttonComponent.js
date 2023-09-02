import "./button.style.scss";
import CreateAccountForm from "../createAccountForm/createAccountForm.component";

const ButtonComponent = ({
  text,
  style,
  onClickHandler,
  showForm,
  showModal,
}) => {
  return (
    <div className="btn-container">
      <button
        className="btn"
        style={style}
        onClick={onClickHandler}
        name={text}
      >
        {text}
      </button>
      {showForm === "Create Account" && (
        <CreateAccountForm showModal={showModal} />
      )}
    </div>
  );
};
export default ButtonComponent;
