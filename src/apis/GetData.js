import CreateAxios from 'apis/CreateAxios';
import UseAxios from 'apis/UseAxios';

const GetData = (urlMap) => (
	UseAxios({
		axiosInstance: CreateAxios,
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
