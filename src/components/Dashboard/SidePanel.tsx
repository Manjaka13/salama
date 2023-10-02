import React, { FC, useContext } from "react";
import { Icon, faTimes } from "src/helpers/icons";
import { PanelContext } from "src/hooks/usePanel";

/**
 * The side panel
 */

const SidePanel: FC = (): JSX.Element => {
	const { shown, content, switchDisplay } = useContext(PanelContext);

	return (
		<div className={`side-panel${shown && " side-panel--shown"}`}>
			<div
				className="side-panel__close"
				title="Close panel"
				onClick={() => switchDisplay(null)}
			>
				<Icon className="icon" icon={faTimes} />
			</div>
			<div className="side-panel__content">{content}</div>
		</div>
	);
};

export default SidePanel;
