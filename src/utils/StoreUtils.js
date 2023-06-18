export const StoreUtils = {
    /**
     * Returned distance between user position and store position
     * Then you will need put distance to per store object
     *
     * @param {{coordinates: {latitude, longitude}}} userPosition
     * @param {{coordinates: {latitude, longitude}}} storePosition
     * @returns {number} distance
     */
    calculateDistance: function (userPosition, storePosition) {
        return (
            Math.acos(
                Math.sin(userPosition.coordinates.latitude) * Math.sin(storePosition.coordinates.latitude) +
                    Math.cos(userPosition.coordinates.latitude) *
                        Math.cos(storePosition.coordinates.latitude) *
                        Math.cos(userPosition.coordinates.longitude - storePosition.coordinates.longitude),
            ) * 6371
        );
    },

    /**
     * Sort by distance between user position and store position
     *
     * @param {Array.<{distance: number}>} stores
     * @returns {Array.<{distance: number}>} sorted
     */
    sortByDistance: function (stores) {
        let sorted = stores.sort((obj1, obj2) => obj1.distance - obj2.distance);
        console.log(sorted);
        return sorted;
    },
};
