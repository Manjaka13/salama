import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { FC, Fragment } from "react";
import { Icon } from "src/helpers/icons";

/**
 * Template for side panel content
 */

interface IPanelWrapper {
	title: string;
	icon?: IconProp;
	children?: JSX.Element;
}

const PanelWrapper: FC<IPanelWrapper> = ({
	title,
	icon,
	children,
}): JSX.Element => (
	<div className="panel-wrapper">
		<h2 className="panel-wrapper__title">
			{icon && (
				<Fragment>
					<Icon className="icon" icon={icon} />{" "}
				</Fragment>
			)}
			{title}
		</h2>
		<div className="panel-wrapper__divider"></div>
		{children}
	</div>
);

export default PanelWrapper;
