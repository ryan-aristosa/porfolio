import ScrollAnimation from 'react-animate-on-scroll';
import TechStackTag from 'components/landing/TechStackTag';
import 'styles/landing/Experience.scss';

function Experience(props) {
	const experiences = props.experiences;

	const timeCard = experiences && Object.keys(experiences).map(eKey => {
		const experience = experiences[eKey];
		const duration = experience.duration;

		return <ScrollAnimation
			animateIn='animate__fadeInUp'
			animateOnce={true}
			delay={500}
			className={
				'time-card position-relative '
				+ ((Number(eKey) + 1) % 2 === 0 ? 'right' : 'left')
			}
			key={duration}
		>
			<div className='details position-relative'>
				<h6 className='fw-600 text-center mb-4'>{duration}</h6>
				<ul className='list-unstyled'>
					{
						Object.keys(experience.descriptionList).map(dKey => (
							<li className='mt-2' key={dKey}>
								{experience.descriptionList[dKey].text}
							</li>
						))
					}
					<li>
						<div className='p-0 m-0 mt-2'>
							{
								Object.keys(experience.stackList).map(sKey => {
									const stackList = experience.stackList[sKey];
									return <div className='d-inline-block' key={sKey}>
										<TechStackTag
											stack={stackList.stackName}
											bgColor={stackList.primaryColorHex}
											color={stackList.fontColorCode}
										/>
									</div>
								})
							}
						</div>
					</li>
				</ul>
			</div>
		</ScrollAnimation>
	});

	return (
		<div className='experience smt-64' id='experience'>
			<div className='mw-1200 my-0 mx-auto px-3'>
				<h3 className='section-title text-center'>Experience</h3>
				<div className='timeline mx-auto mt-5 position-relative'>
					{timeCard}
				</div>
			</div>
		</div>
	);
}

export default Experience;
