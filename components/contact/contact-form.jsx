import style from "./contact-form.module.css";
import { useState, useEffect } from "react";
import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
	const response = await fetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(contactDetails),
		headers: { "Content-Type": "application/json" },
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message || "Something went wrong.");
	}
}

function ContactForm() {
	const [enteredEmail, setEnteredEmail] = useState("");
	const [enteredName, setEnteredName] = useState("");
	const [enteredMessage, setEnteredMessage] = useState("");
	const [requestStatus, setRequestStatus] = useState();
	const [requestError, setRequestError] = useState();

	useEffect(() => {
		if (requestStatus === "success" || requestStatus === "error") {
			const timer = setTimeout(() => {
				setRequestStatus(null);
				setRequestError(null);
			}, 3000);

			return () => clearTimeout(timer);
		}
	}, [requestStatus]);

	async function sendMessageHandler(event) {
		event.preventDefault();

		setRequestStatus("pending");

		try {
			await sendContactData({
				email: enteredEmail,
				name: enteredName,
				message: enteredMessage,
			});
			setRequestStatus("success");
			setEnteredMessage("");
			setEnteredEmail("");
			setEnteredName("");
		} catch (error) {
			setRequestError(error.message);
			setRequestStatus("error");
		}
	}

	let notification;

	if (requestStatus === "pending") {
		notification = {
			status: "pending",
			title: "Sending message...",
			message: "Your message is on its way",
		};
	}

	if (requestStatus === "success") {
		notification = {
			status: "success",
			title: "Message Sent...",
			message: "Your message has been sent",
		};
	}

	if (requestStatus === "error") {
		notification = {
			status: "error",
			title: "Errror",
			message: requestError,
		};
	}

	return (
		<section className={style.contact}>
			<h1>How can I help you?</h1>
			<form
				className={style.form}
				onSubmit={sendMessageHandler}>
				<div className={style.controls}>
					<div className={style.control}>
						<label htmlFor="email">Your Email</label>
						<input
							type="email"
							id="email"
							required
							value={enteredEmail}
							onChange={(event) => setEnteredEmail(event.target.value)}></input>
					</div>
					<div className={style.control}>
						<label htmlFor="name">Your Name</label>
						<input
							type="text"
							id="name"
							required
							value={enteredName}
							onChange={(event) => setEnteredName(event.target.value)}></input>
					</div>
				</div>
				<div className={style.control}>
					<label htmlFor="message">Your Message</label>
					<textarea
						id="message"
						rows="5"
						value={enteredMessage}
						onChange={(event) =>
							setEnteredMessage(event.target.value)
						}></textarea>
				</div>
				<div className={style.actions}>
					<button>Send Message</button>
				</div>
			</form>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
		</section>
	);
}

export default ContactForm;
