function Loading() {
	return (
		<div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
			<div 
				className='spinner-border text-primary' 
				role='status'
				style={{ fontSize: '20px', height: '50px', width: '50px' }}
			>
				<span className='sr-only'>Loading...</span>
			</div>
			<h4 className='fw-600 text-primary ms-4 mt-2'>Loading...</h4>
		</div>
	);
}

export default Loading;
