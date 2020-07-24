import React from "react";
import "./BlogHeader.scss";
import { Link } from "@reach/router";

const BlogHeader = (props) => {
    return (
        <header className="Header">
            <div className="Header-content container">
                <h1 className="Header-title">
                    <Link to="/blog">EasyLang Blog</Link>
                </h1>
            </div>
        </header>
    );
}

export default BlogHeader;
