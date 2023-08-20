import "./App.css";
import Home from "./routes/home/home.component";

import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/naviagtion.component";
import MyTweets from "./routes/myTweets/myTweets.component";
import SignInPage from "./routes/signInPage/signinpage.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/home" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/home/mytweets" element={<MyTweets />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
