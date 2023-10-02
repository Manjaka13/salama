import React, { FC, createContext, useState } from "react";

/**
 * Side panel hook and context
 */

interface IPanelContext {
	shown: boolean;
	switchDisplay: () => void;
}

const defaultValues = {
	shown: false,
	switchDisplay: () => {},
};

// Create a context with default values
export const PanelContext = createContext<IPanelContext>(defaultValues);

interface IPanelProvider {
	children: JSX.Element;
}

export const PanelProvider: FC<IPanelProvider> = ({
	children,
}): JSX.Element => {
	const [shown, setShown] = useState<boolean>(defaultValues.shown);

	// Shows/Hides side panel
	const switchDisplay = (): void => setShown(!shown);

	const value: IPanelContext = {
		shown,
		switchDisplay,
	};

	return <PanelContext.Provider value={value}>{children}</PanelContext.Provider>;
};
