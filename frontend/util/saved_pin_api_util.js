export const fetchSavedPins = () => (
    $.ajax({
        url: '/api/saved_pins',
        method: 'GET'
    })
);

export const createSavedPin = savedPin => (
    $.ajax({
        url: '/api/saved_pins',
        method: 'POST',
        data: { savedPin }
    })
);

export const deleteSavedPin = savedPinId => (
    $.ajax({
        url: `/api/saved_pins/${savedPinId}`,
        method: 'DELETE'
    })
);