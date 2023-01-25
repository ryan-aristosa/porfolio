import 'styles/LoadingAndError.scss';

function LoadingAndError(props) {
	return (
		<div className='loading-and-error d-flex justify-content-center align-items-center'>
			<h3 className={'fw-600 ' + props.textColor}>{props.text}</h3>
		</div>
	);
}

export default LoadingAndError;
