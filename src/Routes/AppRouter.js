//Modules
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Components
import Header from "../Components/Layout/Header/Header";
import Menu from "../Components/Layout/Menu/Menu";
import Body from "../Components/Layout/Body/Body";
import Post from "../Components/Post/Post";
//CSS
import styles from "./AppRouter.module.scss";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className={styles.AppContainer}>
        <Header />
        <Menu />
        <Switch>
          <Route path="/" component={Body} exact={true} />
          <Route path="/blog" component={Body} exact={true} />
          <Route path="/blog/:id" component={Post} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
