import ScrollAnimation from 'react-animate-on-scroll';
import TechStackTag from 'components/landing/TechStackTag';
import 'styles/landing/Project.scss';

function Project(props) {
	const projects = props.projects;

	const projectCard = projects && Object.keys(projects).map(pKey => {
		const project = projects[pKey];

		return <div className='card-container d-flex' key={pKey}>
			<ScrollAnimation
				animateIn='animate__fadeIn'
				animateOnce={true}
				delay={500}
				className='c-eb card w-100 border-0 rounded m-2 p-2'>
				<div className='card-body d-flex flex-column justify-content-between'>
					<div>
						<h6 className='fw-600'>{project.title}</h6>
						<p className='p-0 mx-0 mb-0 mt-4'>{project.description}</p>
						<p className='p-0 mx-0 mb-0 mt-3'>
							Contribution: {project.contribution}
						</p>
						<div className='tech-stack p-0 mx-0 mb-0 mt-4'>
							{
								Object.keys(project.stackList).map(sKey => (
									<div className='d-inline-block' key={sKey}>
										<TechStackTag
											stack={project.stackList[sKey].stackName}
											bgColor={project.stackList[sKey].primaryColorHex}
											color={project.stackList[sKey].fontColorCode}
										/>
									</div>
								))
							}
						</div>
					</div>
					<div className='button-container mt-5 w-100 pe-2'>
						<a
							href={project.openSourceLink}
							rel='noreferrer'
							target='_blank'
							className='btn w-100 h-100 d-flex align-items-center 
								justify-content-center'
						>
							View Open-Source
						</a>
					</div>
				</div>
			</ScrollAnimation>
		</div>
	});

	return (
		<div className='project smt-64' id='project'>
			<div className='mw-1200 my-0 mx-auto px-3'>
				<h3 className='section-title text-center'>Project</h3>
				<div className='d-flex justify-content-center flex-wrap mt-5 w-100'>
					{projectCard}
				</div>
			</div>
		</div>
	);
}

export default Project;
