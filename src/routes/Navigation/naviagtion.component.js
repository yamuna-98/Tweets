import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.style.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="links-container  ">
        <Link className="each-link" to="/">
          Home
        </Link>
        <Link className="each-link" to="/myTweets">
          MyTweets
        </Link>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
