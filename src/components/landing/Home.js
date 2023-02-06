import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';
import 'styles/landing/Home.scss';

function Home(props) {
	const home = props.home;

	function downloadCV() {
		const fileName = 'CV - Ryan Aristosa.pdf';

		fetch(fileName).then(response => {
			response.blob().then(blob => {
				const fileURL = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');

				alink.href = fileURL;
				alink.download = fileName;
				alink.click();
			})
		});
	}

	return (
		<ScrollAnimation
			animateIn='animate__zoomIn'
			animateOnce={true}
			delay={500}
			className='home d-flex align-items-center position-relative overflow-hidden'
		>
			<div className='mw-1200 my-0 mx-auto text-center px-3 '>
				<h4 className='fw-600 p-0 mx-0 position-relative'>{home.intro}</h4>
				<h1 className='p-0 m-0 mb-0 mt-4 position-relative'>{home.name}</h1>
				<p className='p-0 mx-0 mb-0 mt-5 position-relative'>{home.bio}</p>
				<div className='btn-container mt-5 d-flex justify-content-center'>
					<button className='btn' onClick={downloadCV}>
						Download CV &nbsp;
						<FontAwesomeIcon icon='fa-solid fa-download' />
					</button>
				</div>
			</div>
		</ScrollAnimation>
	);
}

export default Home;
