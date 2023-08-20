import "animate.css";
import "./createAccountForm.style.scss";

const CreateAccountForm = (showModal) => {
  console.log("entered");
  return showModal ? (
    <div className=" modal-backdrop ">
      <div className="form-container">
        <form className="form-data">
          <label htmlFor="fname" className="labels">
            First name:{" "}
          </label>
          <input type="text" placeholder="First name" className="input-box" />
          <label htmlFor="lname" className="labels">
            Last name:{" "}
          </label>
          <input type="text" placeholder="Last name" className="input-box" />
          <label htmlFor="email" className="labels">
            Email Id:{" "}
          </label>
          <input type="email" placeholder="email id" className="input-box" />
          <button className="btn-submit">Submit</button>
          <button className="btn-close">&times;</button>
        </form>
      </div>
    </div>
  ) : null;
};
export default CreateAccountForm;
