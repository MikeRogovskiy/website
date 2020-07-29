import React, { useState } from "react";
import ReactHtmlParser from "react-html-parser";
import BlogHeader from "../../components/Blog/BlogHeader";
import FooterNavBar from "../../components/FooterNavBar"
import "./articles.scss";
import { useNavigate } from "@reach/router";

import articleOne from "../../assets/images/blog/articleOne.jpeg";
import articleTwo from "../../assets/images/blog/articleTwo.jpg";
import articleThree from "../../assets/images/blog/articleThree.jpg";

export default function ArticlesPage(props){
    const [page, setPage] = useState("blog");

    const getLangText = (text) => {
        return ReactHtmlParser(props.text[text]);
    };

    const navigateTo = useNavigate();

    const ArticleOne = () => {
        return(
           <div id="article-1" className="articles_folder_block">
               <div className="articles_folder_block_head">
                    <h2>{getLangText("articleOneTitleMain")}</h2>
                    <img src={articleOne}></img>
               </div>

                <h3>{getLangText("articleOneTitle1")}</h3>
                <p>{getLangText("articleOneText1")}</p>
                <h3>{getLangText("articleOneTitle2")}</h3>
                <p>{getLangText("articleOneText2")}</p>
                <h3>{getLangText("articleOneTitle3")}</h3>
                <p>{getLangText("articleOneText3")}</p>
                <h3>{getLangText("articleOneTitle4")}</h3>
                <p>{getLangText("articleOneText4")}</p>
                <h3>{getLangText("articleOneTitle5")}</h3>
                <p>{getLangText("articleOneText5")}</p>
                <h3>{getLangText("articleOneTitle6")}</h3>
                <p>{getLangText("articleOneText6")}</p>

                <div className="articles_folder_block_footer">
                    <p><i>{getLangText("articleFinal")}</i></p>
                    <p>{getLangText("articleMonth")} 24.07.2020</p>
                </div>
           </div>
        )
    }

    const ArticleTwo = () => {
        return(
            <div id="article-2" className="articles_folder_block">
                <div className="articles_folder_block_head">
                    <h2>{getLangText("articleTwoTitleMain")}</h2>
                    <img src={articleTwo}></img>
               </div>

               <p>{getLangText("articleTwoText1")}</p>
                <p>{getLangText("articleTwoText2")}</p>
                <br /><p>{getLangText("articleTwoListTitle1")}</p>
                <ol>
                    <li>{getLangText("articleTwoListText1")}</li>
                    <li>{getLangText("articleTwoListText2")}</li>
                    <li>{getLangText("articleTwoListText3")}</li>
                </ol>
                <p>{getLangText("articleTwoText3")}</p>

                <div className="articles_folder_block_footer">
                    <p><i>{getLangText("articleFinal")}</i></p>
                    <p>{getLangText("articleMonth")} 24.07.2020</p>
                </div>
            </div>
        )
    }

    const ArticleThree = () => {
        return(
            <div id="article-3" className="articles_folder_block">
                <div className="articles_folder_block_head">
                    <h2>{getLangText("articleThreeTitleMain")}</h2>
                    <img src={articleThree}></img>
               </div>

                <p>{getLangText("articleThreeText1")}</p>
                <h2>{getLangText("articleThreeTitle2")}</h2>
                <p>{getLangText("articleThreeText2")}</p>

                <div className="articles_folder_block_footer">
                    <p><i>{getLangText("articleFinal")}</i></p>
                    <p>24.07.2020</p>
                </div>
            </div>
        )
    }

    const ArticlesList = () => {
        if(window.location.href.includes("reasons-to-study-english")){
            return <ArticleOne />
        } else if(window.location.href.includes("start-learning-english-with-elang")){
            return <ArticleTwo />
        } else if(window.location.href.includes("free-english-learnings-apps")){
            return <ArticleThree />
        } else {
            return null
        }
    }

    return(
        <div className="articles">
            <BlogHeader/>
            <div className="articles_folder">
                <ArticlesList />
                <button onClick={() => navigateTo("blog")}>{getLangText("articleBtnBack")}</button>
            </div>
            <footer>
                <FooterNavBar text={props.text} page={page}/>
            </footer>

        </div>
    )
}