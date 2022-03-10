import React from "react";
import PinIndexItem from "../pin/pin_index_item";
import { Link } from "react-router-dom";

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.fetchPins();

        const script = document.createElement("script");
        script.src = "script.js";
        script.async = true;
        this.div.appendChild(script);
    }
    
    render(){
        const { pins, currentUser } = this.props;
        const pinsArray = Object.values(pins)
        const sizes = ["ex-small", "small", "medium", "large", "ex-large"]

        const mainPage = () => {
            return (
                <div id="mainpage" ref={el => (this.div = el)}>
                    <section className="welcome-inspiration">
                        <h2 className="text">Get your next</h2>

                        <div className="wrapper">
                            <div className="changing">
                                <h2 id="friends" className="text animate-before">joy with litte friends</h2>
                            </div>
                            <div className="changing">
                                <h2 id="outdoor" className="text animate-before">wild outdoor experience</h2>
                            </div>
                            <div className="changing">
                                <h2 id="food" className="text animate-before">dinner inspiration</h2>
                            </div>
                            <div className="changing">
                                <h2 id="decor" className="text animate-before">home decor inspiration</h2>
                            </div>
                        </div>
                    </section>

                    <section className="second-text">
                        <h2 className="signup-text">Sign up to get your ideas</h2>
                    </section>

                    <div className="background-pics">
                        <div className="grid-container">
                            <div className="grid">
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/donkey.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/flamingo.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/bitetail.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/parot.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/peacock.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/hairpin.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/giraffe.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/catdog.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/yesmaster.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/pumadog.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/yesmaster.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/wronged.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/bunny.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/chinchilla.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/deer.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/panda1.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/watching.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/duck.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/elephant.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/foxes.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/goodsleep.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/lamb.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/owl.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/panda.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/penguins.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/whatamidoing.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/piglet.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/polarbear.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/puppyonhand.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/seal.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/skunk1.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/sleepingfox.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/tapir.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/dikdik.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/skunk.jpeg" /></div>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/donkey.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/flamingo.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/bitetail.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/parot.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/peacock.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/hairpin.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/giraffe.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/catdog.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/yesmaster.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/pumadog.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/yesmaster.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/wronged.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/bunny.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/chinchilla.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/deer.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/panda1.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/watching.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/duck.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/elephant.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/foxes.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/goodsleep.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/lamb.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/owl.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/panda.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/penguins.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/whatamidoing.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/piglet.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/polarbear.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/puppyonhand.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/seal.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/skunk1.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/sleepingfox.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/tapir.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/dikdik.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/skunk.jpeg" /></div>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/donkey.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/flamingo.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/bitetail.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/parot.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/peacock.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/hairpin.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/giraffe.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/catdog.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/yesmaster.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/pumadog.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/yesmaster.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/wronged.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/bunny.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/chinchilla.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/deer.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/panda1.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/watching.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/duck.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/elephant.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/foxes.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/goodsleep.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/lamb.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/owl.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/panda.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/penguins.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/whatamidoing.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/piglet.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/polarbear.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/puppyonhand.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/seal.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/skunk1.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/sleepingfox.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/tapir.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/dikdik.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/skunk.jpeg" /></div>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/donkey.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/flamingo.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/bitetail.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/parot.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/peacock.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/hairpin.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/giraffe.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/catdog.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/yesmaster.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/pumadog.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/yesmaster.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/wronged.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/bunny.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/chinchilla.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/deer.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/panda1.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/watching.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/duck.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/elephant.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/foxes.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/goodsleep.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/lamb.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/owl.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/panda.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/penguins.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/whatamidoing.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/piglet.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/polarbear.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/puppyonhand.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/seal.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/skunk1.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/sleepingfox.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/tapir.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/dikdik.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/friends/skunk.jpeg" /></div>
                                </div>
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