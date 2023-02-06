import GetData from 'apis/GetData';
import Content from 'components/landing/Content';
import Footer from 'components/landing/Footer';
import Navigation from 'components/landing/Navigation.js';
import Error from 'components/Error';
import Loading from 'components/Loading';
import 'styles/App.scss';

function App() {
	const navigations = GetData('/navigation');
	const home = GetData('/home');
	const about = GetData('/about');
	const experiences = GetData('/experience');
	const projects = GetData('/project');
	const contacts = GetData('/contact');

	if (
		navigations.loading
		|| home.loading
		|| about.loading
		|| experiences.loading
		|| projects.loading
		|| contacts.loading
	) {
		return <Loading />
	} else if (
		navigations.error
		|| home.error
		|| about.error
		|| experiences.error
		|| projects.error
		|| contacts.error
	) {
		return <Error />
	}

	return (
		<div>
			<Navigation navigations={navigations.response} />
			<Content
				home={home.response}
				about={about.response}
				experiences={experiences.response}
				projects={projects.response}
			/>
			<Footer contacts={contacts.response} />
		</div>
	);
}

export default App;
