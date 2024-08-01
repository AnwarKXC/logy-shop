import { createError, getHeader } from "h3";
import { User } from "~/server/models/user.model";

export default defineEventHandler(async (event) => {
	try {
		const firebaseUid = getHeader(event, "firebaseUid");
		const name = getHeader(event, "name");
		const email = getHeader(event, "email");

		if (!firebaseUid) {
			throw createError({ statusCode: 400, statusMessage: "Missing firebaseUid header" });
		}
		let user = await User.findOne({ firebaseUid });
		if (!user) {
			const newUser = new User({
				firebaseUid: firebaseUid,
				email: email,
				name: name,
			});
			await newUser.save();
			return { success: true, message: "New user created", user: newUser };
		}
		return { success: true, user };
	} catch (error) {
		console.error("Error in getUser.ts:", error);
		return { success: false, message: "An error occurred" };
	}
});
