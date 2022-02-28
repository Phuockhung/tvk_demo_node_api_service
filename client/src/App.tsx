import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import PageRender from "./PageRender";
import AppHeader from "./components/global/AppHeader";
import AppFooter from "./components/global/AppFooter";
import { Alert } from "./components/alert/Alert";
import { refreshToken } from "./redux/actions/authAction";
import { getCategories } from "./redux/actions/categoryAction";
import { getHomeBlogs } from "./redux/actions/blogAction";
import "antd/dist/antd.css";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshToken());
    dispatch(getCategories());
    dispatch(getHomeBlogs());
  }, [dispatch]);

  return (
    <div className="container">
      <Router>
        <Alert />
        <AppHeader />
        <Switch>
          <Route exact path="/" component={PageRender} />
          <Route exact path="/:page" component={PageRender} />
          <Route exact path="/:page/:slug" component={PageRender} />
        </Switch>
        <AppFooter />
      </Router>
    </div>
  );
};

export default App;
