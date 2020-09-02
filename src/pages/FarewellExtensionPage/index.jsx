import React from "react";
import "./FarewellExtensionPage.scss";
import brainCry from "../../assets/images/brainCry.svg";

export default function FarewellExtensionPage() {
  const OPTIONS = [
    "Hard to use",
    "I don’t want to create account",
    "Bad design",
    "Doesn’t work on my favorite websites",
    "Too expensive",
    "Not needed",
  ];

  const createCheckbox = (option) => (
    <label>
      <input type="checkbox" className="checkbox" />
      {option}
    </label>
  );

  const createCheckboxes = OPTIONS.map((item) => createCheckbox(item));

  return (
    <div className="farewell-main">
      <div className="farewell-main__left">
        <p className="farewell-main__left--title">
          Help us improve <br />
          our product...
        </p>
        <img src={brainCry} alt="" />
        <p className="farewell-main__left--text">
          <span>Hi there!</span>
          <span style={{ marginTop: "15px" }}>
            We are sorry to see you go. Please, <br /> leave you feedback to
            help us do <br /> better!
          </span>
          <span style={{ marginTop: "15px" }}>
            Hope you will come back soon.
          </span>
          <span style={{ marginTop: "15px" }}>
            Sincerely, <br /> EasyLang team
          </span>
        </p>
      </div>
      <div className="farewell-main__right">
        <p className="farewell-main__right--title">Tell us why you leave?</p>
        <form className="farewell-main__right--form">
          {createCheckboxes}
          <div>
            <p>
              Other reasons <span style={{ color: "#BDBDBD" }}>(Optional)</span>{" "}
            </p>
            <textarea name="" id="" cols="40" rows="7"></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
