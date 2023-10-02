import React, { FC, useContext } from "react";
import SignIn from "src/components/Page/SingIn";
import { UserContext } from "src/hooks/useUser";
import Loading from "src/components/Page/Loading";
import Dashboard from "src/components/Dashboard/Dashboard";

/**
 * React entry point
 */

const App: FC = (): JSX.Element => {
	const { loading, user } = useContext(UserContext);

	console.log(user);

	return loading ? <Loading /> : user ? <Dashboard /> : <SignIn />;
};

export default App;
