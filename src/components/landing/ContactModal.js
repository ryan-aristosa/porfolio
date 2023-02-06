function ContactModal(props) {
	const accountList = props.currentContact.accountList;

	const accountButton = accountList && Object.keys(accountList).map(key => (
		<a
			href={accountList[key].link}
			rel='noreferrer'
			target='_blank'
			className='c-eb btn w-100 h-100 d-flex align-items-center 
				justify-content-center mt-3'
			style={{ backgroundColor: '#007BB5' }}
			key={key}
		>
			{accountList[key].accountName}
		</a >
	));

	return (
		<div
			className='modal fade'
			id='contactLink'
			data-bs-backdrop='static'
			data-bs-keyboard='false'
			tabIndex='-1'
			aria-labelledby='staticBackdropLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog d-flex align-items-center'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h1 className='c-dcb modal-title fs-5' id='staticBackdropLabel'>
							Choose {props.currentContact.platform}
						</h1>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					<div className='modal-body'>{accountButton}</div>
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-bs-dismiss='modal'
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactModal;
