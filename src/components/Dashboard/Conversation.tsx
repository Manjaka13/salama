import React, { FC, useContext } from "react";
import { AVATAR_DEFAULT, GENERAL, YOU } from "src/helpers/const";
import { Icon, faMessage, faTrash } from "src/helpers/icons";
import ConversationInfo from "src/components/Dashboard/ConversationInfo";
import { ChannelContext } from "src/hooks/useChannel";
import { IChannel } from "src/helpers/interfaces";
import { UserContext } from "src/hooks/useUser";

/**
 * This component displays the current conversation
 */

const Conversation: FC = (): JSX.Element | null => {
	const k: number = 2;
	const { user } = useContext(UserContext);
	const { selectedChannel, allChannelList } = useContext(ChannelContext);
	let current: IChannel | null =
		allChannelList.filter((item) => item.id === selectedChannel)[0] || null;

	if (!current && selectedChannel === GENERAL.id) current = GENERAL;
	else if (!current && selectedChannel === YOU.id) current = YOU;

	// for (let i = 0; i < allChannelList.length; i++)
	// 	if (allChannelList[i].id === selectedChannel) {
	// 		current = allChannelList[i];
	// 		break;
	// 	}

	return (
		current && (
			<div className="conversation">
				<div className="conversation__head no-select">
					<div className="target">
						{current.type === "channel" && <span>#</span>}
						{current.type !== "channel" && (
							<img className="avatar" src={AVATAR_DEFAULT} alt="Avatar" />
						)}
						<p>{current.name}</p>
						{current.type !== "channel" && (
							<div className={`status${k % 2 === 0 && " status--active"}`}></div>
						)}
					</div>
					{user?.email === current.owner && (
						<button className="delete" title="Delete this channel">
							<Icon className="icon" icon={faTrash} /> Delete channel
						</button>
					)}
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
		)
	);
};

export default Conversation;
