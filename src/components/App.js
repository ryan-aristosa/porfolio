import GetData from 'apis/GetData';
import Content from 'components/landing/Content';
import Footer from 'components/landing/Footer';
import GitHubModal from 'components/landing/GitHubModal';
import Navigation from 'components/landing/Navigation.js';
import Error from 'components/Error';
import Loading from 'components/Loading';
import 'styles/App.scss';

function App() {
	const navigation = GetData('/navigation');
	const home = GetData('/home');
	const about = GetData('/about');
	const experience = GetData('/experience');

	if (navigation.loading || home.loading  || about.loading  || experience.loading) {
		return <Loading />
	} else if (navigation.error || home.error || about.error || experience.error) {
		return <Error />
	}

	return (
		<div>
			<Navigation navigation={navigation.response} />
			<Content home={home.response} about={about.response} experience={experience.response} />
			<Footer />
			<GitHubModal />
		</div>
	);
}

export default App;
