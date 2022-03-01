import React from "react";
import NavLinksContainer from "./nav_links/nav_links_container";
import AllModals from "./modal/modal_container"; 
// import NavLinks from "./nav_links/nav_links";
// import LoginFormContainer from "./session/login_form_container";
// import SignUpFormContainer from "./session/signup_form_container";


const App = () => (
    <div>
        <AllModals/>
        {/* <h1>Pinspire</h1> */}
        <header>
            <NavLinksContainer />
        </header>
    </div>
);

export default App;