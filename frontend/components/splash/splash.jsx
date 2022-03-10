import React from "react";
import PinIndexItem from "../pin/pin_index_item";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

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

        const mainPage = () => {
            return (
                <div id="mainpage" ref={el => (this.div = el)}>
                    <Helmet>
                        <script src="script.js"></script>
                    </Helmet>
                    <section className="welcome-inspiration">
                        <h2 className="text">Get your next</h2>

                        <div className="wrapper">
                            <div className="changing">
                                <h2 id="friends" className="text animate-before">joy with litte friends</h2>
                            </div>
                            <div className="changing">
                                <h2 id="decor" className="text animate-before">home decor inspiration</h2>
                            </div>
                            <div className="changing">
                                <h2 id="food" className="text animate-before">feast inspiration</h2>
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
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/wooden.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/yard.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/plant3.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/welcome2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/plants.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/whitepainting.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/welcome.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/warmlight.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/shelf.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/paintings.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/radio.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/yard2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/plant2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/painting4.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/office2.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/photoonshelf.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/painting2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/organized.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/office.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/night.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/mirror.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/bed5.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/lights.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/flower2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/bed4.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/green.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/bed2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/kitchen.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/flower.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/dontbeaprick.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/basket.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/closet.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/bed.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/baywindow.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/deerdecor.jpeg" /></div>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/bento.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/bacon.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/avacadotoast.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/bread.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/breakfast.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/bun.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/chococake.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/coffee.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/crawfish.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/donuts.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/friedchicken.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/lamb.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/macron.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/mocha.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/orange.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/pancake.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/pasta.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/pizza.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/precooked.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/pizza3.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/pumkinpie.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/bbq.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/salad.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/pasta2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/sandwich.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/share.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/shortrib.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/shrimps.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/snails.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/strawberryicecream.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/sushi.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/tacos.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/tacos2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/vegs.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/whitechoco.jpeg" /></div>
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