import GetData from 'apis/GetData';
import Content from 'components/landing/Content';
import Footer from 'components/landing/Footer';
import Navigation from 'components/landing/Navigation.js';
import Error from 'components/Error';
import Loading from 'components/Loading';
import 'styles/App.scss';

function App() {
	const navigation = GetData('/navigation');
	const home = GetData('/home');
	const about = GetData('/about');
	const experience = GetData('/experience');
	const project = GetData('/project');
	const contacts = GetData('/contact');

	if (
		navigation.loading
		|| home.loading
		|| about.loading
		|| experience.loading
		|| project.loading
		|| contacts.loading
	) {
		return <Loading />
	} else if (
		navigation.error
		|| home.error
		|| about.error
		|| experience.error
		|| project.error
		|| contacts.error
	) {
		return <Error />
	}

	return (
		<div>
			<Navigation navigation={navigation.response} />
			<Content
				home={home.response}
				about={about.response}
				experience={experience.response}
				project={project.response}
			/>
			<Footer contacts={contacts.response} />
		</div>
	);
}

export default App;
