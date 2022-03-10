import React from "react";
import PinIndexItem from "../pin/pin_index_item";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";  
import { useEffect } from 'react';

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPins();
        const script = document.createElement("script");
        script.src = 'script.js';
        script.async = true;
        document.body.appendChild(script);
    }
    
    render(){
        const { pins, currentUser } = this.props;
        const pinsArray = Object.values(pins)
        const sizes = ["ex-small", "small", "medium", "large", "ex-large"]

        const mainPage = () => {
            return (
            <div id="mainpage" ref={el => (this.instance = el)}>
                
                <section className="main-text">
                    <h2 className="stable">Get your next</h2>

                    <div className="categories">
                        <div className="changing">
                            <h2 className="text before">weeknight dinner idea</h2>
                        </div>
                        <div className="changing">
                            <h2 className="text before">home decor idea</h2>
                        </div> 
                        <div className="changing">
                            <h2 className="text before">new look outfit</h2>
                        </div>
                        <div className="changing">
                            <h2 className="text before">green thumb idea</h2>
                        </div>
                    </div>
                </section>
                <section className="second-text">
                    <h2 className="signup-text">Sign up to get your ideas</h2>
                </section>
                <div className='background-pics'>
                    <div className="grid">

                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                    </div>

                    <div className="grid">
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                        <div className="column">
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                            <div className="pic before"></div>
                        </div>
                    </div>
                </div>
            </div>
        )}; 


        const homePage = () => (
            <div className="load-page">
                <div className="pins-container">
                    {pinsArray.map(pin => 
                        <PinIndexItem
                            size={sizes[Math.floor(Math.random() * sizes.length)]}
                            key={pin.id}
                            currentUser={currentUser}
                            pin={pin}
                        />)}
                </div>
                <div className="create-pin-button-container">
                    <Link to="/pins/create"><button className="create-pin-button">+</button></Link>
                </div>
            </div>
        );

        return (
            this.props.currentUser ? homePage() : mainPage()
        );
    }


}; 

export default Splash; 