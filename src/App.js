import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Home from "./pages/home/Home";
import Invest from "./pages/invest/Invest";
import Industy from "./pages/industry/Industry";
import About from "./pages/about/About";
import React, { useState, useEffect } from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
// import License from "./pages/license";
// import aesjs from "aes-js";
import Background from "./components/animatedbg";
import "./locales/in18";
import ActionsButtons from "./components/ActionsButtons";
const history = createBrowserHistory();

function App() {
  const [updateHistory, setUpdatedHistory] = useState(history);
  // const [shouldAppWork, setShouldAppWork] = useState(true);
  // useEffect(() => {
  //   if (window.localStorage.getItem("date") !== null) {
  //     const encodedDate = window.localStorage.getItem("date");
  //     var key = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  //     var iv = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  //     var encryptedBytes = aesjs.utils.hex.toBytes(encodedDate);
  //     var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
  //     var decryptedBytes = aesCbc.decrypt(encryptedBytes);
  //     var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);

  //     if (new Date() < new Date(decryptedText.trim())) {
  //       setShouldAppWork(true);
  //     } else {
  //       setShouldAppWork(false);
  //       // history.push("/license", { terminate: true });
  //       // window.open(`${window.location.origin}/license`, "self");
  //     }
  //   } else {
  //     setShouldAppWork(false);
  //     // history.push("/license", { terminate: true });
  //     // window.open(`${window.location.origin}/license`, "self");
  //   }
  // }, [shouldAppWork]);

  // if (shouldAppWork) {
  return (
    <Provider store={store}>
      <Background />
      <ActionsButtons history={history} />
      <Router history={history}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/invest">
            <Invest />
          </Route>
          <Route path="/industry/:industryName?">
            <Industy />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
