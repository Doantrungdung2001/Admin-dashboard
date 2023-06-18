import axiosClient from './axiosClient';
import StoreUtils from '../utils/StoreUtils';

export const StoreService = {
    /**
     *
     * @param {Object} userPosition - Current position of user.
     * @param {Object} userPosition.coordinates - coordinates of user
     * @param {number} userPosition.coordinates.latitude - The latitude value.
     * @param {number} userPosition.coordinates.longtitude - The longtitude value.
     * @param {number} distance
     */
    getAll: async function (userPosition, distance) {
        let stores = [];
        stores = await axiosClient.get('/stores');
        stores = stores.map((store) => ({ ...store, distance: StoreUtils.calculateDistance(userPosition, store) }));
        stores = StoreUtils.sortByDistance(stores);
        return stores;
    },
};
