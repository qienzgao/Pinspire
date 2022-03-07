import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavLinksContainer from "./nav_links/nav_links_container";
import AllModals from "./modal/modal_container";
import SplashContainer from "./splash/splash_container";


const App = () => (
    <div>
        <AllModals />
        <header>
            <NavLinksContainer />
        </header>
            <SplashContainer/>
    </div>
);

export default App;