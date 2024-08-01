import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, unique: true },
		firebaseUid: { type: String, required: true, unique: true },
		addresses: [{ type: mongoose.Types.ObjectId, ref: "Address" }],
		defaultAddress: { type: mongoose.Types.ObjectId, ref: "Address" },
		phoneNumber: { type: String },
		isActive: { type: Boolean, default: true },
		role: { type: String, enum: ["customer", "admin"], default: "customer" },
	},
	{
		timestamps: true,
	},
);

// Indexes for performance
UserSchema.index({ email: 1 });
UserSchema.index({ firebaseUid: 1 });

export interface IUser extends mongoose.Document {
	_id: string;
	name: string;
	email: string;
	firebaseUid: string;
	addresses: mongoose.Types.ObjectId[];
	defaultAddress?: mongoose.Types.ObjectId;
	phoneNumber?: string;
	isActive: boolean;
	role: "customer" | "admin";
}

export const User = model<IUser>("User", UserSchema);
