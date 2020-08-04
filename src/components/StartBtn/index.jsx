import React from "react";
import "./startBtn.scss";
import { Link } from "@reach/router";
import ReactHtmlParser from "react-html-parser";

export default class StartBtn extends React.Component {
    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    };
   
    render() {
        return (
            <div id="list-for-start-btn">
                <Link
                    onClick={()=>{window.gtag(this.props.gtagName, this.props.gtagClick,{
                        event_category: this.props.gtagCategory
                    })  
                    }}
                    to={this.props.link}
                    rel="noopener noreferrer"
                    id={this.props.id}
                    style={{opacity: this.props.opacity}}
                >
                    {this.props.text}
                </Link>
            </div>
        );

    };

};