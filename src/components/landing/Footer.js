import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import ContactModal from 'components/landing/ContactModal';
import 'styles/landing/Footer.scss';

function Footer(props) {
	const contacts = props.contacts;
	const [currentContact, setCurrentContact] = useState({});

	const contactAccount = Object.keys(contacts).map(cKey => {
		const contact = contacts[cKey];
		const accountList = contact.accountList;

		if (accountList.length === 1) {
			return <a
				href={accountList[0].link}
				aria-label={contact.platform}
				rel='noreferrer'
				target='_blank'
				className='fab-wrapper c-dcb d-flex align-items-center 
						justify-content-center mx-2'
				key={cKey}
			>
				<FontAwesomeIcon icon={contact.icon} />
			</a>
		} else {
			return <div
				className='fab-wrapper c-dcb d-flex align-items-center 
						justify-content-center mx-2'
				data-bs-toggle='modal'
				data-bs-target='#contactLink'
				key={cKey}
				onClick={setContact}
			>
				<FontAwesomeIcon icon={contact.icon} />
			</div>
		}

		function setContact() {
			setCurrentContact(contact);
		}
	});

	return (
		<footer className='bc-dcb c-eb text-center py-5'>
			<div className='links d-flex justify-content-center'>
				{contactAccount}
			</div>
			<div className='copyright mt-4'>{props.footer.text}</div>
			<ContactModal currentContact={currentContact} />
		</footer>
	);
}

export default Footer;
