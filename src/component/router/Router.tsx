import { Switch, Route } from "react-router-dom";
import { PathLogin, PathNotFound, PathSplash } from "./path";

export default function Router() {
    return (
        <Switch >
            <Route {...PathSplash} />
            <Route {...PathLogin} />
            <Route {...PathNotFound} />
        </Switch>
    )
}
