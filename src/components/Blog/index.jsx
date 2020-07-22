import React from "react";
import "./Blog.scss";
import BlogHeader from "./BlogHeader";
import Article from "./Article";
import ArticlesList from './ArticlesList'
import FullArticle from './FullArticle'
import {Router} from"@reach/router"

const useHash = process.env.PUBLIC_URL.indexOf("github") !== -1 ? true : false;

export default class Blog extends React.Component {
    render() {
        return (
            <div className="Blog">
                <BlogHeader/>
            </div>
        );
    }
}
