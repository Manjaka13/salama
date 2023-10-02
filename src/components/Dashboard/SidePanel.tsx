import React, { FC, useContext } from "react";
import { Icon, faTimes } from "src/helpers/icons";
import { PanelContext } from "src/hooks/usePanel";

/**
 * The side panel
 */

interface ISidePanel {
	children?: JSX.Element;
}

const SidePanel: FC<ISidePanel> = ({ children }): JSX.Element => {
	const { shown, switchDisplay } = useContext(PanelContext);

	return (
		<div className={`side-panel${shown && " side-panel--shown"}`}>
			<div
				className="side-panel__close"
				title="Close panel"
				onClick={() => switchDisplay()}
			>
				<Icon className="icon" icon={faTimes} />
			</div>
			{children}
		</div>
	);
};

export default SidePanel;
