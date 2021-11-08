import React, { useMemo } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Experience from "../experience";
import Github from "../github";
import Home from "../home";
import Info from "../info";

const useComponentWillMount = (func: any) => useMemo(func, []);

const BaseLayoutOutside: React.FC = () => {
  return <Home />;
};

const Layout: React.FC = () => {
  useComponentWillMount(() => {
    const path = window.location.pathname.split("/");
    if (path[1] === "home") {
      return <BaseLayoutOutside />;
    } else if (
      path.length < 2 ||
      (path[1] !== "info" && path[1] !== "experience" && path[1] !== "github")
    ) {
      console.log(path);
      window.location.href = `${process.env.PUBLIC_URL}/home`;
    }
  });

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={BaseLayoutOutside} />
          <Route path="/info" component={() => <Info />} />
          <Route path="/experience" render={() => <Experience />} />
          <Route path="/github" render={() => <Github />} />
          <Route component={BaseLayoutOutside} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Layout;
