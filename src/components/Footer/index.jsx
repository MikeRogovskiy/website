import React from "react";
import {Link} from '@reach/router'
import "./Footer.scss";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="Footer">
                <div className="copyright">
                    <p>
                        © 2020 <Link to="/">EASYLANG</Link> CO. All Rights Reserved.
                    </p>
                </div>
            </footer>
        );
    };
};
