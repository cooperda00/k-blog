//Modules
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//Components
import About from "../Components/About/About";
import Body from "../Components/Layout/Body/Body";
import BlogCardsContainer from "../Components/BlogCardsContainer/BlogCardsContainer";
import Contact from "../Components/Contact/Contact";
import Header from "../Components/Layout/Header/Header";
// import Menu from "../Components/Layout/Menu/Menu";
import Post from "../Components/Post/Post";
import Sidebar from "../Components/Layout/Sidebar/Sidebar";
//SASS
import styles from "./AppRouter.module.scss";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div className={styles.AppContainer}>
        <Header />
        {/* <Menu /> */}
        <Body>
          <Switch>
            <Route path="/" component={BlogCardsContainer} exact={true} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={BlogCardsContainer} exact={true} />
            <Route path="/blog/:id" component={Post} />
            <Route path="/contact" component={Contact} exact={true} />
          </Switch>
          <Sidebar />
        </Body>
      </div>
    </BrowserRouter>
  );
}
