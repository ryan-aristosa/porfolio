function AuthorModal(props) {
	let modalBody;

	if (props.modalId === 'addAuthorModal' || props.modalId === 'updateAuthorModal') {
		modalBody = <div className='modal-body'>
			<label htmlFor='authorName'>Name:</label>
			<input type='text' className='form-control' id={props.inputFieldId} />
		</div>
	} else if (props.modalId === 'deleteAuthorModal') {
		modalBody = <div className='modal-body'>
			Action cannot be undone. Continue delete?
		</div>
	}

	return (
		<div
			className='modal fade'
			id={props.modalId}
			data-bs-backdrop='static'
			data-bs-keyboard='false'
			tabIndex='-1'
			aria-labelledby='staticBackdropLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h1 className='modal-title fs-5' id='staticBackdropLabel'>
							{props.modalTitle}
						</h1>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='modal'
							aria-label='Close'
						></button>
					</div>
					{modalBody}
					<div className='modal-footer'>
						<button
							type='button'
							className='btn btn-secondary'
							data-bs-dismiss='modal'
						>Close</button>
						<button
							type='button'
							className='btn btn-danger'
							onClick={props.doAction}
							data-bs-dismiss='modal'
						>
							{props.buttonName}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AuthorModal;
