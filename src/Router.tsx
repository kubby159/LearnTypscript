import { BrowserRouter, Switch, Route, HashRouter } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
function Router() {
  return (
    <HashRouter>
      <Switch>
        //URL 뒤부분을 변수로 이용.
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default Router;
