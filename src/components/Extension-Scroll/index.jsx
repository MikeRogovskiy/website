import React, { Component, Fragment } from 'react';
import ReactHtmlParser from "react-html-parser";
import Header from '../Header';
import $ from 'jquery';

import './Extension-scroll.scss';

import chromeStoreSvg from "../../assets/images/home/chromeStore.svg";
import number_1 from '../../assets/images/products/number_1.png';
import number_2 from '../../assets/images/products/number_2.png';
import number_3 from '../../assets/images/products/number_3.png';
import number_4 from '../../assets/images/products/number_4.png';
import number_5 from '../../assets/images/products/number_5.png';
import number_6 from '../../assets/images/products/number_6.png';
import number_7 from '../../assets/images/products/number_7.png';
import extension_image_1 from '../../assets/images/products/extension/1_1.png';


import { extensionImages } from '../../assets/images/products/scroll-pages/ExtensionImages';


const isMobile = () => {
    let check = false;
    (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

// const throttle = (func, limit) => {
//     let inThrottle
//     return function() {
//       const args = arguments
//       const context = this
//       if (!inThrottle) {
//         func.apply(context, args)
//         inThrottle = true
//         setTimeout(() => inThrottle = false, limit)
//       }
//     }
//   }

export default class ExtensionScroll extends Component {

    componentDidMount() {
        if (!isMobile()) {
            $(document).scroll(this.scrollPageView);
        }
    }

    componentWillUnmount() {
        $(document).off("scroll", this.scrollPageView);
    }

    getLangText(text) {
        return ReactHtmlParser(this.props.text[text]);
    }

    scrollPageView = () => {
        const pos = $(document).scrollTop();

        if (pos > 300 && pos < 850) {
            this.hideAll("ext_img_1");
            $("#ext_img_1").fadeIn(700);
        }
        if (pos > 850 && pos < 1300) {
            $("#ext_img_2").fadeIn(700);
            $("#ext_img_3").fadeOut(700);
        }
        if (pos > 1400 && pos < 1900) {
            $("#ext_img_2").fadeOut(700);
            $("#ext_img_3").fadeIn(700);
            $("#ext_img_4").fadeOut(700);
        }
        if (pos > 1900 && pos < 2400) {
            $("#ext_img_3").fadeOut(700);
            $("#ext_img_4").fadeIn(700);
            $("#ext_img_5").fadeOut(700);
        }
        if (pos > 2400 && pos < 2900) {
            $("#ext_img_4").fadeOut(700);
            $("#ext_img_5").fadeIn(700);
            $("#ext_img_6").fadeOut(700);
        }
        if (pos > 2900 && pos < 3400) {
            $("#ext_img_5").fadeOut(700);
            $("#ext_img_6").fadeIn(700);
        }
        if (pos < 300) {
            $("#ext_img_1").fadeOut(300);
        }
    }

    hideAll = (exceptMe) => {
        $(".left").each(function (i) {
            if ($(this).attr("id") === exceptMe) return;
            $(this).fadeOut(200);
        });
    }


    render() {
        return (
            <Fragment>
                <Header text={this.props.text} />
                <div className="Description-Scroll">

                    <div className="flex-parent extension-block">
                        <div className="extension-header-top">
                            <h2>{this.getLangText("ExtensionHeader")}</h2>
                            <p>
                                {this.getLangText("ExtensionTopText")}
                            </p>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child">
                            <div className="extension-header button-header">
                                <div className="point"><img src={number_1} alt="number_1" /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionFirstHeader")}</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex-child button-extension">
                            <div className="button-started-extension">
                                <a className="get-started-button-extension top"
                                    onClick={e => alert("Sorry, Coming Soon!")}>
                                    <img src={chromeStoreSvg} alt="Chrome-store" className="icon get-started-button__icon" />
                                    <span className="tag">{this.getLangText("AddToChromeButton")}</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child left" id="ext_img_1">
                            <img src={extension_image_1} alt="Extension_Image" />
                        </div>
                        <div className="flex-child content">
                            <div className="extension-header">
                                <div className="point"><img src={number_2} alt="number_2" /></div>
                                <div>
                                <h2>{this.getLangText("ExtensionThirddHeader")}</h2>

                                <p>{this.getLangText("ExtensionThirdText")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child left" id="ext_img_2">
                            <img style={{ marginTop: extensionImages[1].top + "%", marginLeft: extensionImages[1].left + "%" }}
                                className="description-img" src={extensionImages[1].src}
                                alt="Extension_Image_To_Scroll" />
                        </div>
                        <div className="flex-child content">
                            <div className="extension-header">
                                <div className="point"><img src={number_3} alt="number_3" /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionThirddHeader")}</h2>

                                    <p>{this.getLangText("ExtensionThirdText")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child left" id="ext_img_3">
                            <img style={{ marginTop: extensionImages[2].top + "%", marginLeft: extensionImages[2].left + "%" }}
                                className="description-img" src={extensionImages[2].src}
                                alt="Extension_Image_To_Scroll" />
                        </div>
                        <div className="flex-child content">
                            <div className="extension-header">
                                <div className="point"><img src={number_4} alt="number_4" /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionThirddHeader")}</h2>

                                    <p>{this.getLangText("ExtensionThirdText")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child left" id="ext_img_4">
                            <img style={{ marginTop: extensionImages[3].top + "%", marginLeft: extensionImages[3].left + "%" }}
                                className="description-img" src={extensionImages[3].src}
                                alt="Extension_Image_To_Scroll" />
                        </div>
                        <div className="flex-child content">
                            <div className="extension-header">
                                <div className="point"><img src={number_5} alt="number_5" /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionSecondHeader")}</h2>

                                    <p>{this.getLangText("ExtensionSecondText_1")}</p>
                                    <p>{this.getLangText("ExtensionSecondText_2")}</p>
                                    <p>{this.getLangText("ExtensionSecondText_3")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child  left" id="ext_img_5">
                            <img style={{ marginTop: extensionImages[4].top + "%", marginLeft: extensionImages[4].left + "%" }}
                                className="description-img" src={extensionImages[4].src}
                                alt="Extension_Image_To_Scroll" />
                        </div>
                        <div className="flex-child content">
                            <div className="extension-header">
                                <div className="point"><img src={number_6} alt="number_6" /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionFourthHeader")}</h2>

                                    <p>{this.getLangText("ExtensionFourthText_1")}</p>
                                    <p>{this.getLangText("ExtensionFourthText_2")}</p>
                                    <p>{this.getLangText("ExtensionFourthText_3")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-parent extension-block">
                        <div className="flex-child left" id="ext_img_6">
                            <img style={{ marginTop: extensionImages[11].top + "%", marginLeft: extensionImages[11].left + "%" }}
                                className="description-img" src={extensionImages[11].src}
                                alt="Extension_Image_To_Scroll" />
                        </div>
                        <div className="flex-child content">
                            <div className="extension-header">
                                <div className="point"><img src={number_7} alt="number_7" /></div>
                                <div>
                                    <h2>{this.getLangText("ExtensionThirddHeader")}</h2>

                                    <p>{this.getLangText("ExtensionThirdText")}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-child button-extension footer-button">
                        <div className="button-started-extension">
                            <a className="get-started-button-extension-bottom top"
                                onClick={e => alert("Sorry, Coming Soon!")}>
                                <img src={chromeStoreSvg} alt="Chrome-store" className="icon get-started-button__icon" />
                                <span className="tag">{this.getLangText("AddToChromeButton")}</span>
                            </a>
                        </div>
                    </div>

                </div>
            </Fragment>
        )
    }
}






