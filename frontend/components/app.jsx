import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavLinksContainer from "./nav_links/nav_links_container";
import AllModals from "./modal/modal_container";
import SplashContainer from "./splash/splash_container";
import PinCreateContainer from "./pin/pin_create_container";


const App = () => (
    <div>
        <AllModals />
        <header>
            <NavLinksContainer />
        </header>
            <Route exact path="/" component={SplashContainer} />

        <Switch>
            <AuthRoute path="/pins/create" component={PinCreateContainer} />
        </Switch>
    </div>
);

export default App;