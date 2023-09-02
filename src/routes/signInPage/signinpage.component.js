import "./signin.style.scss";
import "animate.css";
import { useState } from "react";
import ButtonComponent from "../../components/buttonComponent/buttonComponent";

const buttonText = {
  create_Account: "Create Account",
  signin: "Sign in",
};
const inlineStyle = {
  backgroundColor: "rgb(29, 155, 240)",
  border: "0.2px solid rgb(29, 155, 240)",
  color: "white",
  fontWeight: "bold",
  fontSize: "15px",
  padding: "10px 85px",
};
const signupStyle = {
  fontWeight: "bold",
  fontSize: "15px",
  padding: "10px 75px",
  marginBottom: "10px",
};
const signinStyle = {
  color: "rgb(29, 155, 240)",
  fontWeight: "bold",
  fontSize: "15px",
  padding: "10px 120px",
  marginBottom: "35px",
};

const SignInPage = () => {
  const [showForm, setShowForm] = useState("");
  const [modalShown, setModalShow] = useState(false);

  const displayForm = (e) => {
    const { name } = e.target;
    setShowForm(name);
    setModalShow(!modalShown);
  };

  // ${showCreateAccountCard ? "blur" : ""}`
  return (
    <div className={`signin-page`}>
      <div>
        <p>para</p>
      </div>
      <div>
        <span className="quote">Share your thoughts! </span>
        <span className="invitation">Join today.</span>
        <ButtonComponent text="Sign up with Google" />
        <ButtonComponent text="Sign up with Apple" style={signupStyle} />
        <div className="line-container">
          <hr className="line" />
          <span className="or-text">or</span>
          <hr className="line" />
        </div>
        <ButtonComponent
          text={buttonText.create_Account}
          style={inlineStyle}
          onClickHandler={displayForm}
          showForm={showForm}
          showModal={modalShown}
        />
        <div className="rules">
          <span className="rules-text">By signing up, you agree to the,</span>
          <a href="#" className="links">
            Terms of Service
          </a>
          <span className="rules-text"> and </span>
          <a href="#" className="links">
            Privacy Policy
          </a>
          <span className="rules-text">, including </span>
          <a href="#" className="links">
            Cookie Use.
          </a>
        </div>
        <div>
          <span className="qstn">Already have an account?</span>
          <ButtonComponent
            text="Sign in"
            style={signinStyle}
            showSignInForm={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
