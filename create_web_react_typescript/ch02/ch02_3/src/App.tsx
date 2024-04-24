import ClassComponent from "./ClassComponent";
import ArrowComponent from "./ArrowComponent";

export default function App() {
  return (
    <ul>
      <ClassComponent href="http://google.com" text="go to google" />
      <ArrowComponent href="https://naver.com" text="go to naver" />
    </ul>
  );
}
