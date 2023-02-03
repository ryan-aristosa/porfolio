import ScrollAnimation from 'react-animate-on-scroll';
import TechStackTag from 'components/landing/TechStackTag';
import 'styles/landing/Project.scss';

function Project(props) {
	const project = props.project;

	const projectCard = project && Object.keys(project).map(pKey => (
		<div className='card-container d-flex' key={pKey}>
			<ScrollAnimation
				animateIn='animate__fadeIn'
				animateOnce={true}
				delay={500}
				className='c-eb card w-100 border-0 rounded m-2 p-2'>
				<div className='card-body d-flex flex-column justify-content-between'>
					<div>
						<h6 className='fw-600'>{project[pKey].title}</h6>
						<p className='p-0 mx-0 mb-0 mt-4'>{project[pKey].description}</p>
						<p className='p-0 mx-0 mb-0 mt-3'>
							Contribution: {project[pKey].contribution}
						</p>
						<div className='tech-stack p-0 mx-0 mb-0 mt-4'>
							{
								Object.keys(project[pKey].stackList).map(sKey => (
									<div className='d-inline-block' key={sKey}>
										<TechStackTag
											stack={project[pKey].stackList[sKey].stackName}
											bgColor={project[pKey].stackList[sKey].primaryColorHex}
											color={project[pKey].stackList[sKey].fontColorCode}
										/>
									</div>
								))
							}
						</div>
					</div>
					<div className='button-container mt-5 w-100 pe-2'>
						<a
							href={project[pKey].openSourceLink}
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
	));

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
