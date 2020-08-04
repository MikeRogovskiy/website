import React, { useState } from "react";
import "./Blog.scss";
import BlogHeader from "./BlogHeader";
import BlogMain from "./BlogMain";
import FooterNavBar from "../../components/FooterNavBar"

export default function Blog(props) {
    const [page, setPage] = useState("blog")

    return (
        <div className="Blog">
            <BlogHeader/>
            <BlogMain
                text={props.text}
                gtag={
                    ("event", "Read More click", {
                        event_category: "Landing. Blog"
                    })
                }
            />
            <footer>
                <FooterNavBar text={props.text} page={page}/>
            </footer>
        </div>
    );
}
