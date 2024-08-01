import mongoose, { model, Schema } from "mongoose";

const ProductSchema = new Schema(
	{
		_id: { type: String, required: true },
		name: { type: String, required: true },
		description: String,
		price: { type: Number, required: true },
		images: [{ type: String }],
		category: { type: mongoose.Types.ObjectId, ref: "Category" },
		properties: { type: Object },
	},
	{
		timestamps: true,
	},
);

export const Product = model("Product", ProductSchema);

export interface Product extends mongoose.Document {
	_id: string;
	name: string;
	description: string;
	price: number;
	images: string[];
	category: string;
	properties: any;
	createdAt: string;
	updatedAt: string;
	__v: number;
}
