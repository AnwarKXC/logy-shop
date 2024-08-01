import { toast } from "vue3-toastify";
import {
	GoogleAuthProvider,
	FacebookAuthProvider,
	signInWithPopup,
	getAuth,
	signOut,
} from "firebase/auth";
export default () => {
	const { clearUserData, setUserData } = userStore();
	const { t } = useI18n();
	const auth = getAuth();
	// googleProvider
	const signInGoogle = async () => {
		try {
			await signInWithPopup(auth!, new GoogleAuthProvider()).then(async () => {
				toast.success(t("successfully-signed-in-with-google"));
				await setUserData();
				console.log("User data set");
			});
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	// facebookProvider
	const signInFacebook = async () => {
		try {
			await signInWithPopup(auth!, new FacebookAuthProvider()).then(async () => {
				toast.success(t("successfully-signed-in-with-facebook"));
				await setUserData();
				console.log("User data set");
			});
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	// signOut
	const logOut = async () => {
		try {
			await signOut(auth!)
				.then(() => {
					toast.success(t("seeyousoon"));
				})
				.then(() => {
					clearUserData();
				});
		} catch (error: any) {
			toast.error(error.message);
		}
	};

	return {
		signInGoogle,
		signInFacebook,
		logOut,
	};
};
