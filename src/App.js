import "./App.css";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </div>
  );
}

export default App;
