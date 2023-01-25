import UseAxios from 'apis/UseAxios';
import { getAllNavigationText } from 'apis/NavigationAxios';
import Content from 'components/landing/Content';
import Footer from 'components/landing/Footer';
import GitHubModal from 'components/landing/GitHubModal';
import Navigation from 'components/landing/Navigation.js';
import LoadingAndError from 'components/LoadingAndError';
import 'styles/App.scss';

function App() {
	let content;
	const navigation = UseAxios({
		axiosInstance: getAllNavigationText,
		method: 'GET',
		url: '',
		requestConfig: {
			headers: {
				'Content-Language': 'en-US'
			}
		}
	});

	if (navigation[2]) {
		content = <LoadingAndError textColor='text-primary' text='Loading...' />
	} else if (!navigation[2] && navigation[1]) {
		content = <LoadingAndError textColor='text-danger' text={navigation[1]} />
	}

	else {
		content = <div>
			<Navigation navigation={navigation} />
			<Content />
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
