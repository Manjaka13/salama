import { IChannel } from "src/helpers/interfaces";
/**
 * Stores constants
 */

// Default images
export const AVATAR_DEFAULT: string = "images/avatar-default.png";
export const LOGO: string = "images/logo-salama.png";

// Firebase api keys and data
export const FIREBASE = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "",
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "",
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "",
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "",
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SERNDER_ID || "",
	appId: process.env.REACT_APP_FIREBASE_APP_ID || "",
};

// Default channels
export const GENERAL: IChannel = {
	id: "fde14b55-3198-4ebe-af60-e843b8179a15",
	members: [],
	name: "General",
	owner: "admin@salama.mg",
	type: "channel",
};
export const YOU: IChannel = {
	id: "9f0c54f2-065c-4af0-9a0f-c94b9c289be3",
	members: [],
	name: "You",
	type: "dm",
};
