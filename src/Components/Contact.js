import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { FiPhoneCall, FiMail } from 'react-icons/fi';
const Contact = () => {
	return (
		<Jumbotron className="container contact_details">
			<h1 className="contactDetails__heading">Contact Details</h1>
			<h4>
				<FiMail size="2rem" className="contactDetails__icons" />
				nchethan14@gmail.com
			</h4>
			<h4>
				<FiPhoneCall size="2rem" className="contactDetails__icons" />
				+91 8762293306
			</h4>
		</Jumbotron>
	);
};

export default Contact;
