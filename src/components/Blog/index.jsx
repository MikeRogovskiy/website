import React from "react";
import "./Blog.scss";
import Header from "./Header";
import Article from "./Article";
import Footer from "../Footer";

export default class Blog extends React.Component {
    articles = [];
    constructor(props) {
        super(props);
        (context => {
            context
                .keys()
                .sort((a, b) => b.match(/[0-9]+/)[0] - a.match(/[0-9]+/)[0])
                .forEach(key => this.articles.push(context(key)));
        })(require.context("../../articles/", false, /.html$/));
        this.state = {
            findArticleText: ""
        };
    }
    getArticleTitle(html) {
        const title = html.match(/<h1>([^<>]*)<\/h1>/);
        if (title) return title[1];
        return "";
    }
    generateArticleComponents() {
        const articles = this.articles.map((a, index) => {
            const title = this.getArticleTitle(a);
            return (
                <Article articleHtml={a} title={title} key={index} id={index} />
            );
        });
        return articles;
    }
    handleFindText = text => {
        this.setState({
            findArticleText: text
        });
    };
    render() {
        const findedArticles = this.generateArticleComponents().filter(
            a =>
                a.props.title
                    .toUpperCase()
                    .indexOf(this.state.findArticleText.toUpperCase()) !== -1
        );
        return (
            <div className="Blog">
                <Header
                    findArticleText={this.state.findArticleText}
                    handleFindText={this.handleFindText}
                ></Header>
                <div className="content">
                    <div className="container">{findedArticles}</div>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}
