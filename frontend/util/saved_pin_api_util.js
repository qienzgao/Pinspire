export const fetchSavedPins = () => (
    $.ajax({
        url: '/api/savedpins',
    })
);

export const createSavedPin = savedPin => (
    $.ajax({
        url: '/api/savedpins',
        method: 'POST',
        data: { savedPin }
    })
);

export const deleteSavedPin = savedPinId => (
    $.ajax({
        url: `/api/savedpins/${savedPinId}`,
        method: 'DELETE'
    })
);