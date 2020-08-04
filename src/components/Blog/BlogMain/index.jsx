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

    const ReadMoreBtn = (props) => {
        return (
            <button onClick={() => {
                navigateTo(props.navigationLink);
                window.gtag(props.gtag)
            }}>
                {getLangText("articleBtnMore")}
            </button>
        );
    };

    return(
        <div className="blog-content">

            <div className="blog-content_container">
                <div id="blog-content_container_a">
                    <img src={articleOne}></img>
                    <div>
                        <h2>{getLangText("articleOneTitleMain")}</h2>
                        <ReadMoreBtn navigationLink={"reasons-to-study-english"}/>
                    </div>
                </div>

                <div id="blog-content_container_b">
                    <img src={articleTwo}></img>
                    <div>
                        <h2>{getLangText("articleTwoTitleMain")}</h2>
                        <ReadMoreBtn navigationLink={"start-learning-english-with-elang"}/>
                    </div>
                </div>

                <div id="blog-content_container_c">
                    <img src={articleThree}></img>
                    <div>
                        <h2>{getLangText("articleThreeTitleMain")}</h2>
                        <ReadMoreBtn navigationLink={"free-english-learnings-apps"}/>
                    </div>
                </div>
            </div>

        </div>
    )
}