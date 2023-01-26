import 'styles/Loading.scss';

function Loading() {
	return (
		<div className='loading d-flex justify-content-center align-items-center'>
			<div className='spinner-border text-primary' role='status'>
				<span className='sr-only'>Loading...</span>
			</div>
			<h4 className='fw-600 text-primary ms-4 mt-2'>Loading...</h4>
		</div>
	);
}

export default Loading;
