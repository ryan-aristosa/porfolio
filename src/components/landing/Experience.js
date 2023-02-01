import ScrollAnimation from 'react-animate-on-scroll';
import TechStackTag from 'components/landing/TechStackTag';
import 'styles/landing/Experience.scss';

function Experience(props) {
	function toSnakeDash(str) {
		const concatStr = 'color-'.concat(str.replace('#', ' Sharp').replace(' ', '-'));
		return concatStr && concatStr.match(/./g).map(x => x.toLowerCase()).join('');
	}

	const experience = props.experience;
	const TIME_CARD = Object.keys(experience).map(eKey => (
		<ScrollAnimation
			animateIn='animate__fadeInUp'
			animateOnce={true}
			delay={500}
			className={
				'time-card position-relative '
				+ ((Number(eKey) + 1) % 2 === 0 ? 'right' : 'left')
			}
			key={experience[eKey].duration}
		>
			{console.log(eKey + 1)}
			<div className='details position-relative'>
				<h6 className='fw-600 text-center mb-4'>{experience[eKey].duration}</h6>
				<ul className='list-unstyled'>
					{
						Object.keys(experience[eKey].expDescriptionList).map(dKey => (
							<li className='mt-2' key={dKey}>
								{experience[eKey].expDescriptionList[dKey].text}
							</li>
						))
					}
					<li>
						<div className='p-0 m-0 mt-2'>
							{
								Object.keys(experience[eKey].stackList).map(sKey => (
									<div className='d-inline-block' key={sKey}>
										<TechStackTag
											bgColor={
												toSnakeDash(experience[eKey].stackList[sKey].stack)
											}
											color={experience[eKey].stackList[sKey].color}
											stack={experience[eKey].stackList[sKey].stack}
										/>
									</div>
								))
							}
						</div>
					</li>
				</ul>
			</div>
		</ScrollAnimation>
	));

	/*
	const TIME_CARD = Object.keys(props.experience).map(([duration, details, techStack], index) => (
		<ScrollAnimation
			animateIn='animate__fadeInUp'
			animateOnce={true}
			delay={500}
			className={'time-card position-relative ' + ((index + 1) % 2 === 0 ? 'right' : 'left') }
			key={duration}
		>
			<div className='details position-relative'>
				<h6 className='fw-600 text-center mb-4'>{duration}</h6>
				<ul className='list-unstyled'>
					{
						details.map((detail, detailIndex) => (
							<li className='mt-2' key={detailIndex}>{detail}</li>
						))
					}
					<li>
						<div className='p-0 m-0 mt-2'>
							{
								techStack.map(([stack, bgColor, color]) => (
									<div className='d-inline-block' key={stack}>
										<TechStackTag bgColor={bgColor} color={color} stack={stack} />
									</div>
								))
							}
						</div>
					</li>
				</ul>
			</div>
		</ScrollAnimation>
	));
	*/

	return (
		<div className='experience smt-64' id='experience'>
			<div className='mw-1200 my-0 mx-auto px-3'>
				<h3 className='section-title text-center'>Experience</h3>
				<div className='timeline mx-auto mt-5 position-relative'>
					{TIME_CARD}
				</div>
			</div>
		</div>
	);
}

export default Experience;
