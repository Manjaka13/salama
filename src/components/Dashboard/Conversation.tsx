import React, { FC } from "react";
import { AVATAR_DEFAULT } from "src/helpers/const";
import { Icon, faMessage } from "src/helpers/icons";
import ConversationInfo from "src/components/Dashboard/ConversationInfo";

/**
 * This component displays the current conversation
 */

const Conversation: FC = (): JSX.Element => {
	const k: number = 2;

	return (
		<div className="conversation">
			<div className="conversation__head no-select">
				<img className="avatar" src={AVATAR_DEFAULT} alt="Avatar" />
				<p>Tantely</p>
				<div className={`status${k % 2 === 0 && " status--active"}`}></div>
			</div>
			<div className="conversation__body">
				<ConversationInfo />
			</div>
			<form className="conversation__form">
				<textarea className="input" placeholder="Type your message"></textarea>
				<button className="send" type="submit">
					<Icon className="icon" icon={faMessage} /> Send
				</button>
			</form>
		</div>
	);
};

export default Conversation;
