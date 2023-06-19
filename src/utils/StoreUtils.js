import { computeDistanceBetween } from 'spherical-geometry-js';

const StoreUtils = {
    /**
     * Returned distance between user position and store position
     * Then you will need put distance to per store object
     *
     * @param {Object} userPosition - Current position of user.
     * @param {Object} userPosition.coordinates - coordinates of user
     * @param {number} userPosition.coordinates.latitude - The latitude value.
     * @param {number} userPosition.coordinates.longitude - The longitude value.
     * @param {Object} storePosition - Current position of user.
     * @param {Object} storePosition.coordinates - coordinates of user
     * @param {number} storePosition.coordinates.latitude - The latitude value.
     * @param {number} storePosition.coordinates.longitude - The longitude value.
     * @returns {number} distance
     */
    calculateDistance: function (userPosition, storePosition) {
        if (userPosition.coordinates.latitude === 0 || userPosition.coordinates.longitude === 0) {
            return 5000;
        }
        return computeDistanceBetween(
            {
                lat: userPosition.coordinates.latitude,
                lng: userPosition.coordinates.longitude,
            },
            {
                lat: storePosition.coordinates.latitude,
                lng: storePosition.coordinates.longitude,
            },
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
        return sorted;
    },
};

export default StoreUtils;
