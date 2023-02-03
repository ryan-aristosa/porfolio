import { useEffect, useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logoReversed from 'assets/logo-reversed.png';
import 'styles/landing/About.scss'

function About(props) {
	const [flag, setFlag] = useState(true);
	const [heartIcon, setHeartIcon] = useState('fa-regular fa-heart');
	const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 99999) + 10000);
	const contentList = props.about.contentList;

	useEffect(() => {
		const HEART = document.querySelector('.heart');
		document.getElementById('numberOfHearts').innerHTML = randomNum;

		HEART.addEventListener('click', () => {
			if (flag) {
				setRandomNum(randomNum + 1);
				document.getElementById('heart-icon').style.color = 'red';
				setHeartIcon('fa-solid fa-heart');
				setFlag(false);
			}
		});
	});

	const aboutContent = contentList && Object.keys(contentList).map(key => (
		<p className='mt-3 mb-0 mx-0 p-0' key={key}>
			{contentList[key].content}
		</p>
	))

	return (
		<div className='about-me smt-64' id='about'>
			<div className='mw-1200 my-0 mx-auto px-3'>
				<h3 className='section-title text-center'>About</h3>
				<ScrollAnimation
					animateIn='animate__fadeIn'
					animateOnce={true}
					delay={500}
					className='tweet-container mt-5 mx-auto p-5'
				>
					<div className='head d-flex align-items-center position-relative'>
						<div className='profile'>
							<img src={logoReversed} alt='Profile' className='h-100 w-100' />
						</div>
						<div className='ms-3'>
							<p className='fw-600 m-0 p-0'>{props.about.name}</p>
							<p className='fs-14 m-0 p-0 text-muted'>{props.about.username}</p>
						</div>
						<div className='ellipsis position-absolute'>
							<FontAwesomeIcon icon='fa-solid fa-ellipsis' />
						</div>
					</div>
					<div className='mt-4'>
						{ aboutContent }
					</div>
					<div className='bottom mt-4 d-flex position-relative'>
						<div className='heart text-muted d-flex align-items-center'>
							<span className='heart-icon' id='heart-icon'>
								<FontAwesomeIcon icon={heartIcon} />
							</span>
							<span className='fs-14 text-muted ms-2' id='numberOfHearts'></span>
						</div>
						<div className='now fs-14 position-absolute text-muted'>Now</div>
					</div>
				</ScrollAnimation>
			</div>
		</div>
	);
}

export default About;
