import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Item from "./item";

function Rout() {
  return (
    <Router>
      <Route exact path='/' component={App}></Route>
      <Route exact path='/:id' component={Item}></Route>
    </Router>
  );
}
export default Rout;
