import React from "react";
import PinIndexItem from "../pin/pin_index_item";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SignupFormContainer from "../session/signup_form_container";
import { openBoardModal } from "../../actions/board_modal_actions"; 
import BoardIndexContainer from "../boards/board_index_container"; 
import BoardModal from "../modal/board_modal"


class Splash extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            showMenu: false
        }
        this.dropdown = this.dropdown.bind(this)
        this.closeMenu = this.closeMenu.bind(this)
    }

    componentDidMount() {
        this.props.fetchPins();
        this.props.fetchBoards()
    }

    dropdown(e) {
        e.preventDefault(); 
        this.setState({
            showMenu: true
        })
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render(){
        const { pins, currentUser, board } = this.props;
        const pinsArray = Object.values(pins)
        // const sizes = ["ex-small", "small", "medium", "large", "ex-large"]
        const sizes = []

        const mainPage = () => {
            return (
                // <div className="mainpage-wrapper">
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
                                <h2 id="decor" className="text animate-before">decoration inspiration</h2>
                            </div>
                            <div className="changing">
                                <h2 id="food" className="text animate-before">feast inspiration</h2>
                            </div>
                        </div>
                        <div className='arrow-down'>
                            <button>
                                <KeyboardArrowDownIcon fontSize="large" />
                            </button>
                        </div>
                    </section>

                    <section className="second-page">
                        <div className="second-text-container">
                            <h2 className="signup-text">Sign up to get your ideas</h2>
                        </div>
                        <div className="landing-signup-container">
                            <SignupFormContainer/>
                        </div>
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
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/bebrilliant.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/bike.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/welcome2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/plants.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/whitepainting.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/welcome.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/candle.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/shelf.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/paintings.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/chairs.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/coffeebar.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/office3.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/painting.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/office2.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/pottery.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/pottery2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/organized.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/office.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/quaileggs.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/mirror.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/shelf2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/simple.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/vase.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/welcome.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/xmastree.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/bed2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/kitchen.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/xmastree2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/dontbeaprick.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/paintings2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/whitepainting2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/bed.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/painting.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/decor/office.jpeg" /></div>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/bento.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/bacon.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/avocadotoast.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/bread.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/breakfast.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/acai.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/bao.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/macron.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/cheesebowl.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/fish.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/bun.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/chococake.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/coffee.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/crawfish.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/donuts.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/pasta.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/pancake.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/pizza.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/precooked.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/noodles.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/salad.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/bbq.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/oil.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/pasta2.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/sandwich.jpeg" /></div>
                                </div>
                                <div className="column animate-before">
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/share.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/shortrib.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/shrimps.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/snails.jpeg" /></div>
                                    <div className="pic"><img src="https://pinspire-seeds.s3.us-east-1.amazonaws.com/foods/pie.jpeg" /></div>
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
                // </div>
        )}; 

        const homePage = () => (
            <div>
                <div className="load-page" onClick={this.closeMenu}>
                    <div className="pins-container" >
                        {pinsArray.map(pin => 
                            <PinIndexItem
                                size={sizes[Math.floor(Math.random() * sizes.length)]}
                                key={pin.id}
                                currentUser={currentUser}
                                pin={pin}
                                board={board}
                            />)}
                    </div>
                </div>

                <BoardModal user={currentUser} user_id={currentUser.id}/>

                <div className='dropdown-container'>
                    {this.state.showMenu ? 
                    <div className="dropdown-menu">
                        <Link to="/pins/create"><button>Create a Pin</button></Link>
                        <br />
                            <button onClick={() => this.props.openBoardModal('create')}>Create a Board</button>
                    </div> : null}
                    <div className="create-pin-button-container">  
                        <button className="create-pin-button" onClick={this.dropdown}>+</button>
                    </div>
                </div>
            </div>
        );

        return (
            this.props.currentUser ? homePage() : mainPage()
        );
    }


}; 

export default Splash; 