import React, { useState } from "react";
import "./FarewellExtensionPage.scss";
import brainCry from "../../assets/images/brainCry.svg";
import thankYou from "../../assets/images/thank-you.svg";

export default function FarewellExtensionPage() {
  const [showModal, setShowModal] = useState(false);
  const [textareaValue, setTextareaValue] = useState("");

  const OPTIONS = [
    "Hard to use",
    "I don’t want to create account",
    "Bad design",
    "Doesn’t work on my favorite websites",
    "Too expensive",
    "Not needed",
  ];

  const createCheckbox = (option, key) => (
    <label key={key}>
      <input
        type="checkbox"
        className="checkbox"
        onChange={() => {
          window.gtag("event", option, {
            event_category: "Reinstall survey. Checkbox",
          });
        }}
      />
      {option}
    </label>
  );

  const createCheckboxes = OPTIONS.map((item, i) => createCheckbox(item, i));

  const handleSubmit = (submitEvent) => {
    submitEvent.preventDefault();
    setShowModal(true);
    window.gtag("event", textareaValue, {
      event_category: "Reinstall survey. Submit",
    });
  };

  const modalWindow = (
    <div className="popup-wrapper">
      {" "}
      <div className="popup">
        <img src={thankYou} alt="" />
        <p className="popup-text">
          Thank you <br />
          for feedback!
        </p>
      </div>
    </div>
  );

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
        <form className="farewell-main__right--form" onSubmit={handleSubmit}>
          {createCheckboxes}
          <div>
            <p>
              Other reasons <span style={{ color: "#BDBDBD" }}>(Optional)</span>{" "}
            </p>
            <textarea
              name=""
              id=""
              cols="40"
              rows="7"
              value={textareaValue}
              onChange={(event) => setTextareaValue(event.target.value)}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      {showModal && modalWindow}
    </div>
  );
}
