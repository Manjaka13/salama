import React, { FC, useContext } from "react";
import { PanelContext } from "src/hooks/usePanel";

/**
 * The side panel
 */

interface ISidePanel {
	children?: JSX.Element;
}

const SidePanel: FC<ISidePanel> = ({ children }): JSX.Element => {
	const { shown } = useContext(PanelContext);

	return (
		<div className={`side-panel${shown && " side-panel--shown"}`}>{children}</div>
	);
};

export default SidePanel;
