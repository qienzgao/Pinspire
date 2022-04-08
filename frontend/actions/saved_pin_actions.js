import * as SavedPinAPIUtil from '../util/saved_pin_api_util';

export const RECEIVE_SAVEDPINS = 'RECEIVE_SAVEDPINS';
export const RECEIVE_SAVEDPIN = 'RECEIVE_SAVEDPIN';
export const REMOVE_SAVEDPIN = 'REMOVE_SAVEDPIN';

const receiveSavedPins = savedPins => ({
    type: RECEIVE_SAVEDPINS,
    savedPins
});

const receiveSavedPin = savedPin => ({
    type: RECEIVE_SAVEDPIN,
    savedPin
});

const removeSavedPin = savedPinId => ({
    type: REMOVE_SAVEDPIN,
    savedPinId
});

export const fetchSavedPins = () => dispatch => (
    SavedPinAPIUtil.fetchSavedPins()
        .then(SavedPins => dispatch(receiveSavedPins(SavedPins)))
);

export const createSavedPin = savedPin => dispatch => (
    SavedPinAPIUtil.createSavedPin(savedPin)
        .then(createSavedPin => dispatch(receiveSavedPin(createSavedPin)))
);

export const deleteSavedPin = SavedPinId => dispatch => (
    SavedPinAPIUtil.deleteSavedPin(SavedPinId)
        .then(() => dispatch(removeSavedPin(SavedPinId)))
);