import ScrollAnimation from 'react-animate-on-scroll';
import TechStackTag from 'components/landing/TechStackTag';
import 'styles/landing/Project.scss';

function Project(props) {
	const project = props.projectObj.map(([title, detail, contribution, techStack, openSource]) => (
		<div className='card-container d-flex' key={title}>
			<ScrollAnimation
				animateIn='animate__fadeIn'
				animateOnce={true}
				delay={500}
				className='c-eb card w-100 border-0 rounded m-2 p-2'>
				<div className='card-body d-flex flex-column justify-content-between'>
					<div>
						<h6 className='fw-600'>{title}</h6>
						<p className='p-0 mx-0 mb-0 mt-4'>{detail}</p>
						<p className='p-0 mx-0 mb-0 mt-3'>Contribution: {contribution}</p>
						<div className='tech-stack p-0 mx-0 mb-0 mt-4'>
							{
								techStack.map(([stack, bgColor, color]) => (
									<div className='d-inline-block' key={stack}>
										<TechStackTag bgColor={bgColor} color={color} stack={stack} />
									</div>
								))
							}
						</div>
					</div>
					<div className='button-container mt-5 w-100 pe-2'>
						<a
							href={openSource}
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
					{project}
				</div>
			</div>
		</div>
	);
}

export default Project;
