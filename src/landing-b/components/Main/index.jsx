import React from "react";
import imgEnjoy from "../../../assets/images/home/imgEnjoy.svg";
import "./Main.scss";
import Slider from "../Slider";
import EasyLangLogo from "../../assets/EasyLang-logo.svg";

export default function Main() {
  return (
    <div>
      <section className="relax">
        {/* <div className="relax-title"> */}
        <p className="easy-way">
          Easy way <br /> to learn English
        </p>

        <p className="relax-sub">
          Try EasyLang and enjoy learning
          <div className="free-start">
            <a
              rel="noopener noreferrer"
              id="nav-btn"
              href="#"
              style={{ borderRadius: "20px" }}
            >
              FREE START
            </a>
          </div>
          <img src={imgEnjoy} alt="Enjoy learning" className="chill-image" />
        </p>

        {/* </div> */}
        <div className="chill">{/* <Chill /> */}</div>
      </section>
      <section className="options">
        <div className="options-row-first">
          <div className="options-item">
            <p className="easy-way">
              Listen
              <i
                class="em em-ear"
                aria-role="presentation"
                aria-label="EAR"
              ></i>
            </p>
            <span className="relax-sub">
              Listen and repeat phrases easily! <br /> Double subtitles for the
              video you love!
            </span>
          </div>
          <div className="options-item">
            <p className="easy-way">
              Navigate
              <i
                class="em em-point_right"
                aria-role="presentation"
                aria-label="WHITE RIGHT POINTING BACKHAND INDEX"
              ></i>
            </p>
            <span className="relax-sub">
              Convinient navigation in video subtitles!
            </span>
          </div>
          <div className="options-item">
            <p className="easy-way">
              Play
              <i
                class="em em-table_tennis_paddle_and_ball"
                aria-role="presentation"
                aria-label="TABLE TENNIS PADDLE AND BALL"
              ></i>
            </p>
            <span className="relax-sub">
              Play and revise added words <br /> anywhere you go.
            </span>
          </div>
        </div>
        <div className="options-row-second">
          <div className="options-item" style={{ marginRight: "10px" }}>
            <p className="easy-way">
              Train
              <i
                class="em em-muscle"
                aria-role="presentation"
                aria-label="FLEXED BICEPS"
              ></i>
            </p>
            <span className="relax-sub">
              Transform content you love into a lesson! <br /> Add words and
              phrases - EasyLang <br /> combines a unique lesson for you!
            </span>
          </div>
          <div className="options-item" style={{ marginLeft: "10px" }}>
            <p className="easy-way">
              Understand
              <i
                class="em em-brain"
                aria-role="presentation"
                aria-label="BRAIN"
              ></i>
            </p>
            <span className="relax-sub">
              Quickly translate any text and enjoy <br /> the world content
              without limits! <br /> Understand everything!
            </span>
          </div>
        </div>
      </section>
      <section className="slider">
        <Slider />
      </section>
      <section className="products">
        <div className="products-item">
          <img src={EasyLangLogo} alt="" />
          <p className="easy-way">Browser Extension </p>
          <p className="relax-sub">
            - Transform content you love into a lesson!
          </p>{" "}
          <br />
          <p className="relax-sub" style={{ marginBottom: "48px" }}>
            - Add words and phrases - EasyLang combines a unique lesson for you!
          </p>
          <button className="download">Add</button>
        </div>
        <div className="products-item">
          <img src={EasyLangLogo} alt="" />
          <p className="easy-way">Player</p>{" "}
          <p className="relax-sub">
            <span> - Convinient navigation in video </span>
            <br /> <span>- Double subtitles</span>
          </p>
          <button className="download">Download</button>
        </div>
        <div className="products-item">
          <img src={EasyLangLogo} alt="" />
          <p className="easy-way">Tutor</p>
          <p className="relax-sub">
            {" "}
            <span> - Easily revise words and phrases </span>
            <br /> <span>- Have fun while learning</span>
          </p>
          <button className="download">Go To</button>
        </div>
      </section>
    </div>
  );
}
