import React from "react";
import PinIndexItem from "../pin/pin_index_item";
import { Link } from "react-router-dom";

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPins();
    }
    
    render(){
        const { pins, currentUser } = this.props;
        const pinsArray = Object.values(pins)
        const sizes = ["ex-small", "small", "medium", "large", "ex-large"]

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
                    {pinsArray.map(pin => 
                        <PinIndexItem
                            size={sizes[Math.floor(Math.random() * sizes.length)]}
                            key={pin.id}
                            currentUser={currentUser}
                            pin={pin}
                        />)}
                </div>
                <div className="create-pin-button-container">
                    <Link to="/pins/create"><button className="create-pin-button">Create Pin</button></Link>
                </div>
            </div>
        );

        return (
            this.props.currentUser ? homePage() : mainPage()
        );
    }


}; 

export default Splash; 