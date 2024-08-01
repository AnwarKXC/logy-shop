import mongoose, { model, Schema, Document } from "mongoose";

const OrderSchema = new Schema(
	{
		user_id: {
			type: mongoose.Types.ObjectId,
			ref: "User",
			required: true,
		},
		items: [
			{
				product_id: {
					type: mongoose.Types.ObjectId,
					ref: "Product",
					required: true,
				},
				quantity: {
					type: Number,
					required: true,
				},
			},
		],
		total: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

export interface IOrder extends Document {
	user_id: mongoose.Types.ObjectId;
	items: { product_id: mongoose.Types.ObjectId; quantity: number }[];
	total: number;
}

export const Order = model<IOrder>("Order", OrderSchema);
