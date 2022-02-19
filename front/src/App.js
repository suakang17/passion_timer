import Date from "./components/date/Date";
import TopBar from "./components/topBar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/singnIn/SignIn";
import Study from "./components/study/Study";
import TopBarStudy from "./components/topBarStudy/TopBarStudy";
import TotalDate from "./components/date/TotalDate";
import WeekDate from "./components/date/WeekDate";
import MonthDate from "./components/date/MonthDate";
import NewDate from "./components/date/NewDate";
import Mypage from "./components/mypage/Mypage";
import BottomBar from "./components/bottomBar/BottomBar";
import TopBarMy from "./components/topBar/TopBarMy";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TopBar category={"일간"}></TopBar>
          <NewDate category={"일간"}></NewDate>
        </Route>
        <Route path="/su">
          <TopBar category={"주간"}></TopBar>
          <WeekDate category={"주간"}></WeekDate>
        </Route>
        <Route path="/gong">
          <TopBar category={"월간"}></TopBar>
          <MonthDate category={"월간"}></MonthDate>
        </Route>
        <Route path="/ja">
          <TopBar category={"누적"}></TopBar>
          <TotalDate category={"누적"}></TotalDate>
        </Route>
        <Route path="/my">
          <TopBarMy></TopBarMy>
          <Mypage ></Mypage>
          <BottomBar category={"마이페이지"}></BottomBar>
        </Route>

        {/* <Route path="/dae">
          <TopBar category={"대학생"}></TopBar>
          <Date category={"대학생"}></Date>
        </Route> */}
        <Route path="/signIn">
          <SignIn></SignIn>
        </Route>
        <Route path="/study">
          <TopBarStudy></TopBarStudy>
          <Study></Study>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
