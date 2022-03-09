import * as PinAPIUtil from '../util/pin_api_util';

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'; 

const receivePins = pins => ({
    type: RECEIVE_PINS,
    pins
});

const receivePin = pin => ({
    type: RECEIVE_PIN,
    pin
});

const removePin = pinId => ({
    type: REMOVE_PIN,
    pinId
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const fetchPins = () => dispatch => {
    return (
    PinAPIUtil.fetchPins()
        .then(pins => dispatch(receivePins(pins)))
)};

export const fetchPin = pinId => dispatch => (
    PinAPIUtil.fetchPin(pinId)
        .then(pin => dispatch(receivePin(pin)))
);

export const createPin = pin => dispatch => (
    PinAPIUtil.createPin(pin)
        .then(createdPin => dispatch(receivePin(createdPin)))
);

export const updatePin = pin => dispatch => (
    PinAPIUtil.updatePin(pin)
        .then(updatedPin => dispatch(receivePin(updatedPin)))
);

export const deletePin = pinId => dispatch => (
    PinAPIUtil.deletePin(pinId)
        .then(() => dispatch(removePin(pinId)))
);