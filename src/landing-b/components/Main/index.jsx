import React from "react";
import imgEnjoy from "../../../assets/images/home/imgEnjoy.svg";
import "./Main.scss";
export default function Main() {
  return (
    <div>
      <section className="relax">
        <div className="relax-title">
          <p className="easy-way">
            Easy way <br /> to learn English
          </p>
          <p className="relax-sub">Try EasyLang and enjoy learning</p>
        </div>
        <div className="chill">
          {/* <Chill /> */}
          <img src={imgEnjoy} alt="Enjoy learning" className="chill-image" />
        </div>
      </section>
    </div>
  );
}
