import React, { Fragment } from 'react'
import Fade from "react-reveal/Fade";

// Component that receives scroll content as props and implement scroll block
class WithScrollContent extends React.Component {
    state = {
        bgImgId: 0,
        imgId: 0
      };
    
      imgTopOffset = 150;
    
      componentDidMount() {
        document.addEventListener("scroll", this.scrollPageView);
      }
    
      componentWillUnmount() {
        document.removeEventListener("scroll", this.scrollPageView);
      }
    
      scrollPageView = () => {
        const position = window.pageYOffset;
    
        this.props.scrollContent.forEach((content, index, arr) => {
          const element = content.parentRef;
          const nextItem = arr[index + 1] && arr[index + 1].parentRef;
    
          if (
            this.state.imgId !== index &&
            position + 250 + this.imgTopOffset >= element.offsetTop &&
            (nextItem ? position + 250 + this.imgTopOffset < nextItem.offsetTop : true)
          ) {
            this.setState(old => ({
              bgImgId: old.imgId,
              imgId: index
            }));
          }
        });
      };

    render() {
        // As imgTopOffset is used in scrollPage View, insert this styled block into separate constant
        const scrolledImagesStyle = {
            width: "100%",
            position: "sticky",
            left: 0,
            top: this.imgTopOffset
          } 
      return (
        <Fragment>
        <div className="scrolled-content-header">
        <h1>{this.props.getLangText("ScrolledContentHeader")}</h1>
      </div>

      <div className="Description-Scroll">

        <div className="scrolled-content">

          <div className="scrolled-text">
            {this.props.scrollContent.map((content, index) => {
              return (
                <div
                  className="extension-block"
                  ref={ref => (content.parentRef = ref)}
                  key={index}
                >
                  <div className="content">
                    <div className="extension-header content">
                      <div>
                        <div className="content-header">
                          <h2>{this.props.getLangText(content.header)}</h2>
                        </div>
                        <div className="content-body">
                          <p>{this.props.getLangText(content.body)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="scrolled-images">
            <div
              style={scrolledImagesStyle}
            >
              <img
                className="scrolled-item"
                src={
                  this.props.scrollContent[this.state.bgImgId].img[this.props.lang] || this.props.scrollContent[this.state.bgImgId].img.en
                }
                alt="Scrolled_Item"
              />
              <Fade spy={this.state.imgId} duration={800}>
                <img
                  className="scrolled-item"
                  style={{ zIndex: 2 }}
                  src={
                    this.props.scrollContent[this.state.imgId].img[this.props.lang] || this.props.scrollContent[this.state.imgId].img.en
                  }
                  alt="Scrolled_Item"
                />
              </Fade>
            </div>
          </div>
        </div>
      </div>
        </Fragment>
      )
    }
}

export default WithScrollContent;