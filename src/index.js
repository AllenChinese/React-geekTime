import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import HelloWorld from "./c1/hellowold";
import registerServiceWorker from "./registerServiceWorker";
import CommentBox from "./c2/CommentBox";
import BaseComponent from "./c3/base"
import Greeting from './c4/greeting'
import Form from './c5/form'
import Calculator from './c6/Calculator'
import SignUpDialog from "./c7/Dialog";
import ProductTable from './c8/index'
import Tictactoe from './c9/tictactoe'
import DigitalClock from './c10/DigitalClock'
import Comment from './c11/Comment'
import MyContext from './c12/context'
import Myorder from './c13/myorder'
const styles = {
  fontFamily: "sans-serif",
  paddingLeft: "250px"
};

const routeMap = {
  hello: HelloWorld,
  commentBox: CommentBox,
  baseComponent: BaseComponent,
  greeting: Greeting,
  form: Form,
  calculator: Calculator,
  signUpDialog: SignUpDialog,
  productTable: ProductTable,
  tictactoe: Tictactoe,
  digitalClock: DigitalClock,
  comment: Comment,
  myContext: MyContext,
  myorder: Myorder
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
