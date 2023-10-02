import React, { FC } from "react";
import { AVATAR_DEFAULT } from "src/helpers/const";

/**
 * This component displays the current conversation
 */

const Conversation: FC = (): JSX.Element => {
	const k: number = 2;

	return (
		<div className="conversation">
			<div className="conversation__head">
				<img className="avatar" src={AVATAR_DEFAULT} alt="Avatar" />
				<p>Tantely</p>
				<div className={`status${k % 2 === 0 && " status--active"}`}></div>
			</div>
			<p>Conversation</p>
		</div>
	);
};

export default Conversation;
