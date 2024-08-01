import { readBody } from "h3";
import { User } from "~/server/models/user.model";
import mongoose from "mongoose";

export default defineEventHandler(async (event) => {
	try {
		const { userId, productId, quantity } = await readBody(event);

		if (!userId || !productId || quantity === undefined) {
			throw createError({ statusCode: 400, statusMessage: "Missing required fields" });
		}

		if (!mongoose.Types.ObjectId.isValid(productId)) {
			throw createError({ statusCode: 400, statusMessage: "Invalid product ID" });
		}

		let user = await User.findOne({ firebaseUid: userId });

		if (!user) {
			throw createError({
				statusCode: 404,
				statusMessage: "User not found. Please create a user profile first.",
			} );
			
		}
		await user.addToCart(productId, quantity);
		return { success: true, cart: user.cart };
	} catch (error) {
		console.error("Error in cart.post.ts:", error);
		throw createError({ statusCode: 500, statusMessage: "Internal server error" });
	}
});
