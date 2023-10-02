import React, { FC } from "react";
import Spinner from "src/components/Page/Spinner";
import EmptyLayout from "src/components/Layout/EmptyLayout";

/**
 * Loading screen
 */

const Loading: FC = (): JSX.Element => (
	<EmptyLayout>
		<div className="loading">
			<div className="loading__container">
				<Spinner />
				<p className="text">Loading, please wait...</p>
			</div>
		</div>
	</EmptyLayout>
);

export default Loading;
