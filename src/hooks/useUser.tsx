import React, { FC, createContext, useEffect, useState } from "react";
import { auth } from "src/helpers/firebase";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
	onAuthStateChanged,
} from "firebase/auth";
import { User as FirebaseUser } from "firebase/auth";

/**
 * User hook and context
 */

interface IUserContext {
	loading: boolean;
	user: FirebaseUser | null;
	error: string | null;
	signIn: (p: string) => void;
	signOut: () => void;
}

const defaultValues = {
	loading: true,
	user: null,
	error: null,
	signIn: (p: string) => {},
	signOut: () => {},
};

// Create a context with default values
export const UserContext = createContext<IUserContext>(defaultValues);

interface IUserProvider {
	children: JSX.Element;
}

export const UserProvider: FC<IUserProvider> = ({ children }): JSX.Element => {
	const [loading, setLoading] = useState<boolean>(defaultValues.loading);
	const [error, setError] = useState<string | null>(defaultValues.error);
	const [user, setUser] = useState<FirebaseUser | null>(defaultValues.user);

	// Sign in
	const signIn = (p: string): void => {
		let provider;
		const auth = getAuth();
		setLoading(true);
		// Choose the provider
		if (p === "google") provider = new GoogleAuthProvider();
		else provider = new GithubAuthProvider();
		// Open sign in popup
		signInWithPopup(auth, provider)
			.catch((err) => {
				if (
					err.message
						.split(" ")
						.includes("(auth/account-exists-with-different-credential).")
				)
					setError("Another account already uses that email");
				console.error(err.message);
			})
			.finally(() => setLoading(false));
	};

	// Signs user out
	const signOut = (): void => {
		setLoading(true);
		auth.signOut().then(() => setLoading(false));
	};

	// Listen for auth changes
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (user) => {
			if (user) setUser(user);
			else setUser(null);
			setLoading(false);
		});
		return () => unSubscribe();
	}, []);

	const value: IUserContext = {
		loading,
		user,
		error,
		signIn,
		signOut,
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
