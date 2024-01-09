import React from "react";
import "./css/Mainpage.css";

const MainPage = () => {
  return (
    <section>
      <div className="hide-bg"></div>
      <div className="MP1">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h3>Watch anywhere. Cancel anytime</h3>
        <h4>
          Reday to watch? Enter your email to create or restart your membership.
        </h4>
        <input type="text" placeholder="Email address" />
        <button className="ST-BTN">
          <a href="/MainPage2">Get Started !</a>
        </button>
      </div>
    </section>
  );
};

export default MainPage;
