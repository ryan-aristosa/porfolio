import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'styles/landing/Footer.scss'

function Footer() {
	const SOCIAL_OBJ = [
		['https://www.linkedin.com/in/rynrsts/', 'LinkedIn', 'fa-brands fa-linkedin-in'],
		['mailto: ryan.aristosa@softvision.com', 'Email', 'fa-solid fa-envelope']
	];

	return (
		<footer className='bc-dcb c-eb text-center py-5'>
			<div className='links d-flex justify-content-center'>
				<div
					className='fab-wrapper c-dcb d-flex align-items-center 
						justify-content-center mx-2'
					data-bs-toggle='modal'
					data-bs-target='#githubLink'
				>
					<FontAwesomeIcon icon='fa-brands fa-github' />
				</div>
				{
					SOCIAL_OBJ.map(([href, ariaLabel, icon]) => (
						<a
							href={href}
							aria-label={ariaLabel}
							rel='noreferrer'
							target='_blank'
							className='fab-wrapper c-dcb d-flex align-items-center 
						justify-content-center mx-2'
							key={ariaLabel}
						>
							<FontAwesomeIcon icon={icon} />
						</a>
					))
				}
			</div>
			<div className='copyright mt-4'>
				&copy; 2023&nbsp;
				<a href='https://ryan-aristosa.github.io/' className='c-eb text-decoration-none'>
					Ryan Aristosa.
				</a>
				&nbsp;All rights reserved.
			</div>
		</footer>
	);
}

export default Footer;
