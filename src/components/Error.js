import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Error(props) {
	return (
		<div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
			<div>
				<div className='face-sad-tear text-center'>
					<FontAwesomeIcon 
						icon='fa-regular fa-face-sad-tear' 
						style={{ fontSize: '200px', marginTop: '-10vh' }}
					/>
				</div>
				<h2 className='fw-600 text-center mt-5'>Whooops! Something went wrong.</h2>
			</div>
		</div>
	);
}

export default Error;
