import React from 'react';
import SavedPinsIndexItem from './saved_pins_index_item';


class SavedPinsIndex extends React.Component {
    componentDidMount() {
        this.props.fetchSavedPins();
        this.props.fetchPins();
    }

    render() {
        const { pins, savedPins, deleteSavedPin, createSavedPin, board, fetchPins, fetchSavedPins } = this.props;

        let savedArr = Object.values(savedPins);
        let savedFilter = savedArr.filter(savedPin => savedPin.board_id === board.id)

        return (
            <div>
                <div className="unorganized-gallery">
                    <div className="save-unorganized-image">
                        {
                            savedFilter.map(savedPin => <SavedPinsIndexItem
                                pins={pins}
                                savedPin={savedPin}
                                deleteSavedPin={deleteSavedPin}
                                createSavedPin={createSavedPin}
                                fetchSavedPins={fetchSavedPins}
                                fetchPins={fetchPins}
                                key={savedPin.id}
                            />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default SavedPinsIndex;