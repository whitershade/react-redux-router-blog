const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = 'whitershade';

export const getApiUrl = endpoint => `${ROOT_URL}/${endpoint}/?key=${API_KEY}`;
