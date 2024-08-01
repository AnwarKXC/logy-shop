import type { Product } from "~/server/models/product.model"

export interface IUser {
	name: string;
	email: string;
	firebaseUid: string;
	previousOrders: any[];
	addresses: any[];
	isActive: boolean;
	role: string;
	_id: string;
	cart: any[];
	createdAt: string;
	updatedAt: string;
	__v: number;
}

interface IApiResponseSuccess {
	success: boolean;
	message: string;
	user: IUser;
}

interface IApiResponseError {
	success: boolean;
	message: string;
}

export type ApiResponse = IApiResponseSuccess | IApiResponseError | null | undefined;
const useUserStore = defineStore("seoStore", () => {
	const { getUser } = useUser();
	const user = ref<IUser | null>();
	const CartItems = ref<Product[]>( [] );
	
	
	const setUserData = async () => {
		try {
			const response = await getUser();
			if (response && response.success && "user" in response) {
				user.value = response.user as IUser;
			} else if (response && "message" in response) {
				console.log(response.message as string);
			}
		} catch (error) {
			console.log(error);
		}
	};
	const clearUserData = () => {
		user.value = null;
	};
	return {
		user,
		setUserData,
		clearUserData,
	};
});

// HMR
if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}

export default useUserStore;
