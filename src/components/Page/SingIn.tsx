import React, { FC, Fragment, useContext } from "react";
import Spinner from "src/components/Page/Spinner";
import { LOGO } from "src/helpers/const";
import { UserContext } from "src/hooks/useUser";
import EmptyLayout from "src/components/Layout/EmptyLayout";

/**
 * Sign-in component
 */

const SignIn: FC = (): JSX.Element => {
	const { loading, error, signIn } = useContext(UserContext);

	// Check the provider to be fired
	const fireProvider = (provider: string): void => {
		console.log("Provider", provider);
		signIn(provider);
	};

	return (
		<EmptyLayout>
			<div className="sign-in no-select">
				<div className="sign-in__container">
					<img className="logo" src={LOGO} alt="Logo" />
					<h1 className="title">Sign in to Salama !</h1>
					<p className="info">
						Salama is a web application build for a code test for applying to a job as
						software engineer in{" "}
						<a href="https://www.novity.io/" title="Novity website">
							Novity
						</a>
						. So do not mind going around and checking all the features I&apos;ve
						implemented !
					</p>
					{!loading && (
						<Fragment>
							<button className="button google" onClick={() => fireProvider("google")}>
								<img
									className="icon"
									src="https://authjs.dev/img/providers/google.svg"
									alt="Google logo"
								/>
								Sign in with Google
							</button>
							<div className="sign-in__divider">
								<div className="lines"></div>
								<p className="orText">
									{error ? <span className="error">{error}</span> : "OR"}
								</p>
								<div className="lines"></div>
							</div>
							<button className="button github" onClick={() => fireProvider("github")}>
								<img
									className="icon"
									src="https://authjs.dev/img/providers/github-dark.svg"
									alt="Github logo"
								/>
								Sign in with Github
							</button>
						</Fragment>
					)}
					{loading && <Spinner />}
				</div>
			</div>
		</EmptyLayout>
	);
};

export default SignIn;
