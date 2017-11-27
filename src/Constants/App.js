const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = 'whitershade';

export const apiUrl = endpoint => `${ROOT_URL}/${endpoint}/?key=${API_KEY}`;
