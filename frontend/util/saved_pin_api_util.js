export const fetchSavedPins = () => (
    $.ajax({
        url: '/api/saved_pins',
        method: 'GET'
    })
);

export const createSavedPin = saved_pin => (
    $.ajax({
        url: '/api/saved_pins',
        method: 'POST',
        data: { saved_pin }
    })
);

export const deleteSavedPin = savedPinId => (
    $.ajax({
        url: `/api/saved_pins/${savedPinId}`,
        method: 'DELETE'
    })
);