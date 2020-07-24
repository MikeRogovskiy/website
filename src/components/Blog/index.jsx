import React from "react";
import "./Blog.scss";
import BlogHeader from "./BlogHeader";
import BlogMain from "./BlogMain";

export default function Blog(props) {
    return (
        <div className="Blog">
            <BlogHeader/>
            <BlogMain text={props.text}/>
        </div>
    );
}
