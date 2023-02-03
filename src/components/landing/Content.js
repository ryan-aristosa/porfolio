import About from 'components/landing/About';
import Experience from 'components/landing/Experience';
import Home from 'components/landing/Home';
import Project from 'components/landing/Project';

function Content(props) {
	return (
		<div className='content' style={{ paddingTop: '64px' }}>
			<Home home={props.home} />
			<About about={props.about} />
			<Experience experience={props.experience} />
			<Project project={props.project} />
		</div>
	);
}

export default Content;
