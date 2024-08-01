import { defineEventHandler, readBody, createError } from "h3";
import { Cart } from "../models/cart.model";

export default defineEventHandler(async (event) => {
	const method = event.node.req.method;
	const body = await readBody(event);

	switch (method) {
		case "POST": {
			const { userId, items } = body;
			const cart = await Cart.findOneAndUpdate(
				{ user_id: userId },
				{ $addToSet: { items } },
				{ new: true, upsert: true },
			);
			return cart;
		}
		case "PUT": {
			const { userId, productId, quantity } = body;
			const cart = await Cart.findOneAndUpdate(
				{ user_id: userId, "items.product_id": productId },
				{ $set: { "items.$.quantity": quantity } },
				{ new: true },
			);
			if (!cart) {
				throw createError({ statusCode: 404, statusMessage: "Cart or product not found" });
			}
			return cart;
		}
		case "GET": {
			const { userId } = event.context.query;
			const cart = await Cart.findOne({ user_id: userId }).populate("items.product_id");
			return cart;
		}
		case "DELETE": {
			const { userId } = body;
			const cart = await Cart.findOneAndUpdate(
				{ user_id: userId },
				{ $set: { items: [] } },
				{ new: true },
			);
			if (!cart) {
				throw createError({ statusCode: 404, statusMessage: "Cart not found" });
			}
			return cart;
		}
		default:
			throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
	}
});
