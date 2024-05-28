import React from 'react';
import Top from '../components/contact/top/Top';
import AddressSection3 from '../components/contact/address/AddressSection3';
import DeliveryJoySection4 from '../components/contact/deliveryjoy/DeliveryJoySection4';
import FAQsection5 from '../components/contact/faqsection/FAQsection5';
import ContactSection2 from '../components/contact/contactSection2/contactSection2';
import ContactSection7 from '../components/contact/contactSection7/ContactSection7';
import ContactSection8 from '../components/contact/contactSection8/ContactSection8';

const contactUs = () => {
	return (
		<>
			<Top />
			<ContactSection2 />
			<AddressSection3 />
			<DeliveryJoySection4 />
			<FAQsection5 />
			<ContactSection7 />
			<ContactSection8 />
		</>
	);
};

export default contactUs;
