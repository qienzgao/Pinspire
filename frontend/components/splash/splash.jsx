import React from "react";

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
                    <div className="column fade">
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                    </div>
                    <div className="column fade">
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                    </div>
                    <div className="column fade">
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                    </div>
                    <div className="column fade">
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                    </div>
                    <div className="column fade">
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                    </div>
                    <div className="column fade">
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                        <div className="pic"></div>
                    </div>
                    <div className="column fade">
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
        <div>
            <section className="main-text">
                <h2 className="stable">It goes here...</h2>
            </section>
        </div>
    );

    return (
        currentUser ? homePage() : mainPage()
    );
}; 

export default Splash; 