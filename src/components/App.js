import GetData from 'apis/GetData';
import Content from 'components/landing/Content';
import Footer from 'components/landing/Footer';
import GitHubModal from 'components/landing/GitHubModal';
import Navigation from 'components/landing/Navigation.js';
import Error from 'components/Error';
import Loading from 'components/Loading';
import 'styles/App.scss';

function App() {
	// [0] response, [1] error, [2] loading, [3] reload
	const navigation = GetData('/navigation');
	const home = GetData('/home');
	const about = GetData('/about');
	const experience = GetData('/experience');

	if (navigation[2] || home[2] || about[2] || experience[2]) {
		return <Loading />
	} else if (navigation[1] || home[1] || about[1] || experience[1]) {
		return <Error />
	}

	return (
		<div>
			<Navigation navigation={navigation[0]} />
			<Content home={home[0]} about={about[0]} experience={experience[0]} />
			<Footer />
			<GitHubModal />
		</div>
	);
}

export default App;
