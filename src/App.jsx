import Home from "./views/Home/Home.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom/";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route to='/'>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
