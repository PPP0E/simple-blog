import { Fragment } from "react";
import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

function ContactPage() {
	return (
		<Fragment>
			<Head>
				<title>Contact Me</title>
				<meta
					name="description"
					content="Contact me"
				/>
			</Head>
			<ContactForm />
		</Fragment>
	);
}

export default ContactPage;
