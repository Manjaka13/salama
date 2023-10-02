import { FC } from "react";

/**
 * Loading spinner
 */

interface ISpinner {
	className?: string;
	alt?: boolean;
}

const Spinner: FC<ISpinner> = ({ className, alt }): JSX.Element => (
	<div
		className={`spinner${alt ? " spinner--alt" : ""}${
			className ? " " + className : ""
		}`}
	>
		Loading...
	</div>
);

export default Spinner;
