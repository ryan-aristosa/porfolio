import axios from 'axios';

const BASE_URL = 'http://localhost:8080';

export const getAllNavigationData = axios.create({
	baseURL: BASE_URL + '/navigation',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
});

export const getAllHomeData = axios.create({
	baseURL: BASE_URL + '/home',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
});
