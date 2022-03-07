import React from "react";
import { connect } from "react-redux";
import { close } from "../../actions/modal_actions";

const SavedModal = () => {
    return saved = () => (
        <div>
            <button onClick={this.props.close} className="close-button">
                <span aria-hidden="true">&times;</span>
            </button>
            <span>saved!</span>
        </div>
    );

};

const mDTP = dispatch => ({
    close: () => dispatch(close())
})

export default connect(mDTP)(SavedModal); 