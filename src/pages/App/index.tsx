import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Home from "../Home";
import NoFoundPage from "../NoFound";
import "./App.css";

interface ICustomRoute {
  component: any;
  path?: string;
  exact?: boolean;
  layout: any;
  isFooter?: boolean;
}

const App: FunctionComponent<any> = (props) => {
  const CustomeRoute: React.SFC<ICustomRoute> = (props) => {
    const {
      component: Component,
      layout: Layout,
      path,
      isFooter,
      ...rest
    } = props;

    return (
      <Route
        {...rest}
        render={() => (
          <Layout>
            <Component />
            {isFooter ? <Footer /> : <div className="empty-footer" />}
          </Layout>
        )}
      />
    );
  };
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <CustomeRoute
            path="/"
            exact={true}
            component={Home}
            layout={Header}
            isFooter={true}
          />
          <CustomeRoute
            path="*"
            component={NoFoundPage}
            isFooter={true}
            layout={Header}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
