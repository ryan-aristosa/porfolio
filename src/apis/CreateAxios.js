import axios from 'axios';
import UseAxios from 'apis/UseAxios';

const BASE_URL = 'http://localhost:8080';

const createAxios = (urlMap) => (
	axios.create({
		baseURL: BASE_URL + urlMap,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	})
);

export const getData = (urlMap) => (
	UseAxios({
		axiosInstance: createAxios(urlMap),
		method: 'GET',
		url: '',
		requestConfig: {
			headers: {
				'Content-Language': 'en-US'
			}
		}
	})
);
