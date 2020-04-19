import axios from 'react-native-axios';

const instance = axios.create({
    baseURL : 'https://fir-96f6c.firebaseio.com/'
});

export default instance;