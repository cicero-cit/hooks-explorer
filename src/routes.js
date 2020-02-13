import React from 'react';
import { Switch, Route } from "react-router-dom";
import StateUnicornView from "./components/unicorns-state/UnicornView";
import UnicornView from "./components/unicorns/UnicornView";
import Home from './components/home';

export default function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/without-hooks" component={StateUnicornView}/>
            <Route path="/with-hooks" component={UnicornView}/>
        </Switch>
    )
}