import React, { Component } from "react";
import "./blogMain.scss";
import ReactHtmlParser from "react-html-parser";
import articleOne from "../../../assets/images/blog/articleOne.jpeg";
import articleTwo from "../../../assets/images/blog/articleTwo.jpg";
import articleTwoB from "../../../assets/images/blog/articleTwoB.png"
import articleThree from "../../../assets/images/blog/articleThree.jpg";

export default class BlogMain extends Component {
    getLangText = (text) => {
        return ReactHtmlParser(this.props.text[text]);
    };

    render(){
        return(
            <div className="blog-content">
                <div className="blog-content_container">
                    <div id="blog-content_container_a">
                        <img src={articleOne}></img>
                        <h2>{this.getLangText("articleOneTitle1")}</h2>
                        <p>{this.getLangText("articleOneText1")}</p>
                        <h3>{this.getLangText("articleOneTitle2")}</h3>
                        <p>{this.getLangText("articleOneText2")}</p>
                        <h3>{this.getLangText("articleOneTitle3")}</h3>
                        <p>{this.getLangText("articleOneText3")}</p>
                        <h3>{this.getLangText("articleOneTitle4")}</h3>
                        <p>{this.getLangText("articleOneText4")}</p>
                        <h3>{this.getLangText("articleOneTitle5")}</h3>
                        <p>{this.getLangText("articleOneText5")}</p>
                        <h3>{this.getLangText("articleOneTitle6")}</h3>
                        <p>{this.getLangText("articleOneText6")}</p>

                        <p><i>{this.getLangText("articleFinal")}</i></p>
                    </div>

                    <div id="blog-content_container_b">
                        <img src={articleTwo}></img>
                        <h2>{this.getLangText("articleTwoTitle1")}</h2>
                        <p>{this.getLangText("articleTwoText1")}</p>
                        <p>{this.getLangText("articleTwoText2")}</p>
                        {/* <img src={articleTwoB}></img> */}
                        
                        <br /><p>{this.getLangText("articleTwoListTitle1")}</p>
                        <ol>
                            <li>{this.getLangText("articleTwoListText1")}</li>
                            <li>{this.getLangText("articleTwoListText2")}</li>
                            <li>{this.getLangText("articleTwoListText3")}</li>
                        </ol>
                        <p>{this.getLangText("articleTwoText3")}</p>

                        <p><i>{this.getLangText("articleFinal")}</i></p>
                    </div>

                    <div id="blog-content_container_c">
                        <img src={articleThree}></img>
                        <h2>{this.getLangText("articleThreeTitle1")}</h2>
                        <p>{this.getLangText("articleThreeText1")}</p>
                        <h2>{this.getLangText("articleThreeTitle2")}</h2>
                        <p>{this.getLangText("articleThreeText2")}</p>

                        <p><i>{this.getLangText("articleFinal")}</i></p>
                    </div>
                </div>

            </div>
        )
    }
}