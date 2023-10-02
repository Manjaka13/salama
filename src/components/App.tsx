import React, { FC, useContext } from "react";
import EmptyLayout from "src/components/Layout/EmptyLayout";
import SignIn from "src/components/Page/SingIn";
import { UserContext } from "src/hooks/useUser";
import Loading from "src/components/Page/Loading";

/**
 * React entry point
 */

const App: FC = (): JSX.Element => {
	const { loading, user } = useContext(UserContext);

	console.log(user);

	return loading ? (
		<Loading />
	) : user ? (
		<EmptyLayout>
			<p>Dashboard</p>
		</EmptyLayout>
	) : (
		<EmptyLayout>
			<SignIn />
		</EmptyLayout>
	);
};

export default App;
