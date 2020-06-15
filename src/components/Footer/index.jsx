import React from "react";
import {Link} from '@reach/router'
import "./Footer.scss";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="Footer">
                <div className="copyright">
                    <p>
                        Copyright © 2019 <Link to="/">EasyLang</Link>. All Rights
                        Reserved.
                    </p>
                </div>
            </footer>
        );
    };
};
