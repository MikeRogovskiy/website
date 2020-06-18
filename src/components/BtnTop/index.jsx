// import React from "react";
// import "./BtnTop.scss";
// import classNames from "classnames";

// export default class BtnTop extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             showBtn: false
//         };
//     }
//     componentDidMount() {
//         window.addEventListener("scroll", this.handleScroll);
//     }
//     componentWillUnmount() {
//         window.removeEventListener("scroll", this.handleScroll);
//     }
//     handleScroll = e => {
//         if (window.pageYOffset > 150 && !this.state.showBtn) {
//             this.setState({
//                 showBtn: true
//             });
//         } else if (window.pageYOffset <= 150 && this.state.showBtn) {
//             this.setState({
//                 showBtn: false
//             });
//         }
//     };
//     goTop() {
//         window.scroll({ top: 0, left: 0, behavior: "smooth" });
//     }
//     render() {
//         const btnClasses = classNames("BtnTop", {
//             show: this.state.showBtn
//         });
//         return (
//             <button
//                 onClick={this.goTop}
//                 className={btnClasses}
//                 title="Go to top"
//             />
//         );
//     }
// }
