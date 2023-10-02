import React, { FC, Fragment } from "react";
import Navigation from "src/components/Page/Navigation";
import Main from "src/components/Page/Main";
import Footer from "src/components/Page/Footer";

/**
 * This is our default layout
 */

interface IMainLayout {
	children?: JSX.Element;
}

const DefaultLayout: FC<IMainLayout> = ({ children }): JSX.Element => (
	<Fragment>
		<Navigation />
		<Main>{children}</Main>
		<Footer />
	</Fragment>
);

export default DefaultLayout;
