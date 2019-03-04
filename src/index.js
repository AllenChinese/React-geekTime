import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HelloWorld from "./c1/hellowold";
import registerServiceWorker from "./registerServiceWorker";
import CommentBox from "./c2/CommentBox";
import BaseComponent from "./c3/base"
const styles = {
  fontFamily: "sans-serif",
  paddingLeft: "250px"
};

const routeMap = {
  hello: HelloWorld,
  commentBox: CommentBox,
  baseComponent: BaseComponent
};

class App extends React.PureComponent {
  handleLinkClick = key => {
    window.location.hash = `#${key}`;
    this.forceUpdate();
  };
  render() {
    const currentPage = document.location.hash.replace("#", "");

    const CurrentPage = routeMap[currentPage] || HelloWorld;
    return (
      <div style={styles}>
        <ul className="menu-list">
          {Object.keys(routeMap).map(key => (
            <li
              key={key}
              className={
                key === document.location.hash.replace("#", "")
                  ? "is-active"
                  : ""
              }
              style={{ listStyle: "none" }}
            >
              <span className="link" onClick={() => this.handleLinkClick(key)}>
                {key}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ padding: "30px 0" }}>
          <CurrentPage />
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
