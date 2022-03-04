import React from "react";
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