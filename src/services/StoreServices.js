import axiosClient from './axiosClient';
import StoreUtils from '../utils/StoreUtils';

export const StoreService = {
    /**
     *
     * @param {Object} userPosition - Current position of user.
     * @param {Object} userPosition.coordinates - coordinates of user
     * @param {number} userPosition.coordinates.latitude - The latitude value.
     * @param {number} userPosition.coordinates.longitude - The longitude value.
     * @param {number} distance - The distance value between cafe and user.
     * @param {string} name - The name of the cafe or name of address
     */
    getAll: async function (userPosition, distance, name) {
        let stores = [];
        stores = await axiosClient.get('/stores', {
            params: {
                search: name,
            },
        });
        stores = stores.map((store) => ({ ...store, distance: StoreUtils.calculateDistance(userPosition, store) }));
        stores = stores.filter((store) => store.distance <= distance);
        stores = StoreUtils.sortByDistance(stores);
        return stores;
    },
};
