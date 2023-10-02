import React, { FC } from "react";

/**
 * Main container
 */

interface IMain {
	children?: JSX.Element;
}

const Main: FC<IMain> = ({ children }): JSX.Element => (
	<main className="main">{children}</main>
);

export default Main;
