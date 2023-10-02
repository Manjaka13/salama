import React, { FC, Fragment } from "react";
import Main from "src/components/Page/Main";
import Footer from "src/components/Page/Footer";

/**
 * This is our layout for pages like sign-in or everything else
 */

interface IEmptyLayout {
	children?: JSX.Element;
}

const EmptyLayout: FC<IEmptyLayout> = ({ children }): JSX.Element => (
	<Fragment>
		<Main>{children}</Main>
		<Footer />
	</Fragment>
);

export default EmptyLayout;
