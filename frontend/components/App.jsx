import React from "react";
import NavLinksContainer from "./nav_links/nav_links_container";
import AllModals from "./modal/modal_container"; 
import Splash from "./splash/splash";


const App = () => (
    <div>
        <AllModals/>
        <header>
            <NavLinksContainer />
        </header>
        <Splash/>
    </div>
);

export default App;