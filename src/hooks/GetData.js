import axios from 'axios';
import useAxios from 'hooks/useAxios';

const BASE_URL = 'http://localhost:8080';

const createAxios = axios.create({
	baseURL: BASE_URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
});

const GetData = (urlMap) => (
	useAxios({
		axiosInstance: createAxios,
		method: 'GET',
		url: urlMap,
		requestConfig: {
			headers: {
				'Content-Language': 'en-US'
			}
		}
	})
);

export default GetData;
