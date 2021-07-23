import { Switch, Route } from "react-router-dom";
import { PathLogin, PathSplash } from "./path";

export default function Router() {
    return (
        <Switch >
            <Route {...PathSplash} />
            <Route {...PathLogin} />
        </Switch>
    )
}
