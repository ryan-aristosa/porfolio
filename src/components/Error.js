import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'styles/Error.scss';

function Error(props) {
	return (
		<div className='error d-flex justify-content-center align-items-center'>
			<div>
				<div className='face-sad-tear text-center'>
					<FontAwesomeIcon icon='fa-regular fa-face-sad-tear' />
				</div>
				<h2 className='fw-600 text-center'>Whooops! Something went wrong.</h2>
				<h4 className='fw-600 text-center text-danger mt-5'>{props.error}</h4>
			</div>
		</div>
	);
}

export default Error;
