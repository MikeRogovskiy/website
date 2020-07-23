import React from "react";
import "./Blog.scss";
import BlogHeader from "./BlogHeader";
import BlogMain from "./BlogMain";


export default class Blog extends React.Component {
    render() {
        return (
            <div className="Blog">
                <BlogHeader/>
                <BlogMain text={this.props.text}/>
            </div>
        );
    }
}
