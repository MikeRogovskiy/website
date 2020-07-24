import React from "react";
import "./blogMain.scss";
import "./blogMainMedia.scss";
import ReactHtmlParser from "react-html-parser";
import { useNavigate } from "@reach/router";

import articleOne from "../../../assets/images/blog/articleOne.jpeg";
import articleTwo from "../../../assets/images/blog/articleTwo.jpg";
import articleThree from "../../../assets/images/blog/articleThree.jpg";

export default function BlogMain(props){

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    };

    const navigateTo = useNavigate();

    return(
        <div className="blog-content">
            
            <div className="blog-content_container">
                <div id="blog-content_container_a">
                    <img src={articleOne}></img>
                    <div>
                        <h2>{getLangText("articleOneTitleMain")}</h2>
                        <button onClick={() => navigateTo("reasons-to-study-english")}>{getLangText("articleBtnMore")}</button>
                    </div>
                </div>

                <div id="blog-content_container_b">
                    <img src={articleTwo}></img>
                    <div>
                        <h2>{getLangText("articleTwoTitleMain")}</h2>
                        <button onClick={() => navigateTo("start-learning-english-with-elang")}>{getLangText("articleBtnMore")}</button>
                    </div>
                </div>

                <div id="blog-content_container_c">
                    <img src={articleThree}></img>
                    <div>
                        <h2>{getLangText("articleThreeTitleMain")}</h2>
                        <button onClick={() => navigateTo("free-english-learnings-apps")}>{getLangText("articleBtnMore")}</button>
                    </div>
                </div>
            </div>

        </div>
    )
}