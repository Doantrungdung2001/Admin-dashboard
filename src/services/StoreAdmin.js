import axios from 'axios';
import axiosClient from './axiosClient';

const StoreAdmin = {
    fetchData: async function() {
        try {
        //   const response = await axiosClient.get('/stores'); // Replace with your API endpoint
          const response = await axios.get('http://localhost:8000/api/stores');
          const data = response.data; // Assuming the API response contains an array of data objects
          console.log(typeof(data));
          return data;
        } catch (error) {
          console.error('Error fetching data:', error);
          return [];
        }
    }
};

export default StoreAdmin;
