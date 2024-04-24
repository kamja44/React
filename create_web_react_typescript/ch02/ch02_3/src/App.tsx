import { Component } from "react";
import ClassComponent from "./ClassComponent";

export default class App extends Component {
  render() {
    return (
      <ul>
        <ClassComponent href="http://www.google.com" text="go to Google" />
        <ClassComponent href="https://www.naver.com" text="go to Naver" />
      </ul>
    );
  }
}
