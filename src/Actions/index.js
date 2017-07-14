export const selectLocation =(locationName) => {
    return {
        type: 'select_location',
        payload: locationName
    };
};
