import { MongoClient } from "mongodb";

async function handler(req, res) {
	if (req.method === "POST") {
		const { email, name, message } = req.body;

		if (
			!email ||
			!email.includes("@") ||
			!name ||
			name.trim() === "" ||
			!message ||
			message.trim() === ""
		) {
			res.status(422).json({ message: "Invalid input" });
			return;
		}

		const newMessage = {
			email,
			name,
			message,
		};

		let client;

		const connectionString = `mongodb+srv://nextberzan:nextberzan@cluster0.nixi35n.mongodb.net/my-site?retryWrites=true&w=majority`;

		try {
			console.log(connectionString);
			client = await MongoClient.connect(connectionString);
		} catch (error) {
			res.status(500).json({
				message:
					"Internal Server Error, Database connection failed, please contact IT or try again later. You may check if the site is on maintenance, in case of a consurrent maintenance this error is normal and should be resolved after maintennance",
			});
			return;
		}

		const db = client.db();

		try {
			const result = await db.collection("messages").insertOne(newMessage);
			newMessage.id = result.insertedId;
		} catch (error) {
			client.close();
			res.status(500).json({ message: "Internal Server Error" });
			return;
		}

		client.close();
		res.status(201).json({ message: "success", newMessage });
	}
}

export default handler;
