import { defineEventHandler, readBody } from "h3";
import { Order } from "../models/order.model";
import { User } from "../models/user.model";

export default defineEventHandler(async (event) => {
	const method = event.node.req.method;
	const body = await readBody(event);

	switch (method) {
		case "POST": {
			const { userId, items, total } = body;
			const order = new Order({ user_id: userId, items, total });
			await order.save();
			return order;
		}
		case "GET": {
			const { userId } = event.context.query;
			const orders = await Order.find({ user_id: userId }).populate("items.product_id");
			return orders;
		}
		default:
			throw createError({ statusCode: 405, statusMessage: "Method Not Allowed" });
	}
});
