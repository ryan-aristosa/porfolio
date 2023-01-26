import UseAxios from 'apis/UseAxios';
import { getAllNavigationData, getAllHomeData } from 'apis/AxiosCreate';
import Content from 'components/landing/Content';
import Footer from 'components/landing/Footer';
import GitHubModal from 'components/landing/GitHubModal';
import Navigation from 'components/landing/Navigation.js';
import Error from 'components/Error';
import Loading from 'components/Loading';
import 'styles/App.scss';

function App() {
	let content;
	const navigation = UseAxios({
		axiosInstance: getAllNavigationData,
		method: 'GET',
		url: '',
		requestConfig: {
			headers: {
				'Content-Language': 'en-US'
			}
		}
	});
	const home = UseAxios({
		axiosInstance: getAllHomeData,
		method: 'GET',
		url: '',
		requestConfig: {
			headers: {
				'Content-Language': 'en-US'
			}
		}
	});

	if (navigation[2]) {
		content = <Loading />
	} else if (!navigation[2] && navigation[1]) {
		content = <Error error={navigation[1]} />
	}

	else {
		content = <div>
			<Navigation navigation={navigation[0]} />
			<Content home={home[0]} />
			<Footer />
			<GitHubModal />
		</div>
	}

	return (
		<div>
			{content}
		</div>
	);
}

export default App;
