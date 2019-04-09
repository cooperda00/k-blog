//Modules
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Components
import Header from "../Components/Layout/Header/Header";
import Menu from "../Components/Layout/Menu/Menu";
import Body from "../Components/Layout/Body/Body";
import Post from "../Components/Post/Post";
import Sidebar from "../Components/Layout/Sidebar/Sidebar";
import BlogCardsContainer from "../Components/BlogCardsContainer/BlogCardsContainer";
//CSS
import styles from "./AppRouter.module.scss";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className={styles.AppContainer}>
        <Header />
        <Menu />
        <Body>
          <Switch>
            <Route path="/" component={BlogCardsContainer} exact={true} />
            <Route path="/blog" component={BlogCardsContainer} exact={true} />
            <Route path="/blog/:id" component={Post} exact={true} />
            {/* <Route path="/blog/about" component={About} exact={true} />
            <Route path="/blog/contact" component={Contact} exact={true} /> */}
          </Switch>
          <Sidebar />
        </Body>
      </div>
    </BrowserRouter>
  );
}
