import React from "react";
import Pin from "../pin/pin";

const Splash = ({currentUser}) => {
    const mainPage = () => (
        <div>
            <section className="main-text">
                <h2 className="stable">Get your next</h2>
                <div className="categories">
                    <div className="changing">
                        <h2 id="dinner" className="fade">weeknight dinner idea</h2>
                    </div>
                    <div className="changing">
                        <h2 id="decor" className="fade">home decor idea</h2>
                    </div> 
                    <div className="changing">
                        <h2 id="outfit" className="fade">new look outfit</h2>
                    </div>
                    <div className="changing">
                        <h2 id="green" className="fade">green thumb idea</h2>
                    </div>
                </div>
            </section>
            <section className="second-text">
                <h2 className="signup-text">Sign up to get your ideas</h2>
            </section>
            <div className='background-pics'>
                <div className="grid">
                    <div className="column">
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                    </div>
                    <div className="column">
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                    </div>
                    <div className="column">
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                    </div>
                    <div className="column">
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                    </div>
                    <div className="column">
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                    </div>
                    <div className="column">
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                    </div>
                    <div className="column">
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                    </div>
                </div>
            </div>
        </div>
    ); 

    const homePage = () => (
        <div className="load-page">
            <div className="pins-container">
                <Pin size={"small"}/>
                <Pin size={"medium"}/>
                <Pin size={"large"}/>
                <Pin size={"small"} />
                <Pin size={"medium"} />
                <Pin size={"large"} />
                <Pin size={"small"} />
                <Pin size={"medium"} />
                <Pin size={"large"} />
                <Pin size={"small"} />
                <Pin size={"medium"} />
                <Pin size={"large"} />
                <Pin size={"small"} />
                <Pin size={"medium"} />
                <Pin size={"large"} />
                <Pin size={"small"} />
                <Pin size={"medium"} />
                <Pin size={"large"} />
                <Pin size={"small"} />
                <Pin size={"medium"} />
                <Pin size={"large"} />
                <Pin size={"small"} />
                <Pin size={"medium"} />
                <Pin size={"large"} />
                <Pin size={"small"} />
                <Pin size={"medium"} />
                <Pin size={"large"} />
                <Pin size={"small"} />
                <Pin size={"medium"} />
                <Pin size={"large"} />
                <Pin size={"small"} />
                <Pin size={"medium"} />
                <Pin size={"large"} />
                <Pin size={"small"} />
                <Pin size={"medium"} />
                <Pin size={"large"} />
                <Pin size={"small"} />
                <Pin size={"medium"} />
                <Pin size={"large"} />
                <Pin size={"small"} />
                <Pin size={"medium"} />
                <Pin size={"large"} />
                <Pin size={"small"} />
                <Pin size={"medium"} />
                <Pin size={"large"} />
                <Pin size={"small"} />
                <Pin size={"medium"} />
                <Pin size={"large"} />
            </div>
        </div>
    );

    return (
        currentUser ? homePage() : mainPage()
    );
}; 

export default Splash; 