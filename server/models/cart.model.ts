import mongoose, { model, Schema, Document } from "mongoose";

const CartSchema = new Schema(
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
					default: 1,
				},
			},
		],
	},
	{
		timestamps: true,
	},
);

export interface ICart extends Document {
	user_id: mongoose.Types.ObjectId;
	items: { product_id: mongoose.Types.ObjectId; quantity: number }[];
}

export const Cart = model<ICart>("Cart", CartSchema);
