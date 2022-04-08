import React from "react";
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavLinksContainer from "./nav_links/nav_links_container";
import AllModals from "./modal/modal_container";
import SplashContainer from "./splash/splash_container";
import PinCreateContainer from "./pin/pin_create_container";
import PinShowContainer from "./pin/pin_show_container";
import UserShowContainer from "./user/user_show_container";
import BoardShowContainer from "./boards/board_show_container";
import EditBoardFormContainer from './boards/edit_board_form_container';
import PinEditContainer from './pin/pin_edit_container'


const App = () => (
    <div>
        <AllModals />
        <header>
            <NavLinksContainer />
        </header>
            <Route exact path="/" component={SplashContainer} />

        <Switch>
            <AuthRoute path="/pins/create" component={PinCreateContainer} />
            <AuthRoute exact path="/pins/:pinId" component={PinShowContainer} />
            <AuthRoute exact path="/users/:userId" component={UserShowContainer} />
            <AuthRoute exact path="/boards/:boardId" component={BoardShowContainer} />
            <AuthRoute path="/boards/:boardId/edit" component={EditBoardFormContainer} />
            <AuthRoute path="/pins/:pinId/edit" component={PinEditContainer} />
        </Switch>
    </div>
);

export default App;