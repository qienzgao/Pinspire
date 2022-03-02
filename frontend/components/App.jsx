import React from "react";
import NavLinksContainer from "./nav_links/nav_links_container";
import AllModals from "./modal/modal_container"; 
import Splash from "./splash/splash";
// import NavLinks from "./nav_links/nav_links";
// import LoginFormContainer from "./session/login_form_container";
// import SignUpFormContainer from "./session/signup_form_container";


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