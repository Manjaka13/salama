import React, { FC, createContext, useState } from "react";

/**
 * Side panel hook and context
 */

interface IPanelContext {
	shown: boolean;
	content: JSX.Element | null;
	switchDisplay: (c: JSX.Element | null) => void;
}

const defaultValues = {
	shown: false,
	content: null,
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
	const [content, setContent] = useState<JSX.Element | null>(
		defaultValues.content
	);

	// Shows/Hides side panel
	const switchDisplay = (c: JSX.Element | null): void => {
		setShown(!shown);
		setContent(c);
	};

	const value: IPanelContext = {
		shown,
		content,
		switchDisplay,
	};

	return <PanelContext.Provider value={value}>{children}</PanelContext.Provider>;
};
