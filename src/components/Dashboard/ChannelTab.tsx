import React, { FC, useContext } from "react";
import { Icon, faCaretDown, faPlusCircle } from "src/helpers/icons";
import { UserContext } from "src/hooks/useUser";
import { AVATAR_DEFAULT } from "src/helpers/const";
import { PanelContext } from "src/hooks/usePanel";

/**
 * Lists channels here
 */

const ChannelTab: FC = (): JSX.Element => {
	const { user } = useContext(UserContext);
	const { switchDisplay } = useContext(PanelContext);
	const channelList: string[] = ["General", "Jokes", "Novity"];
	const dmList: string[] = [
		user?.displayName?.split(" ")[0] || "You",
		"Evah",
		"Tantely",
		"Maharavo",
	];

	// List of channels to be displayed
	const mappedChannels: JSX.Element[] = channelList.map(
		(item: string, key: number) => (
			<li className="channel-tab__item" key={key}>
				<div className="content"># {item}</div>
			</li>
		)
	);

	// List of direct messages to be displayed
	const mappedDms: JSX.Element[] = dmList.map((item: string, key: number) => (
		<li className="channel-tab__item" key={key}>
			<div className="content">
				<img className="avatar" src={AVATAR_DEFAULT} alt="Avatar" /> {item}
			</div>
			<div className={`status${key % 2 === 0 && " status--active"}`}></div>
		</li>
	));

	return (
		<div className="channel-tab no-select">
			{/* Channels */}
			<h2 className="channel-tab__title">
				<Icon className="icon" icon={faCaretDown} /> Channels
			</h2>
			<ul className="channel-tab__list">{mappedChannels}</ul>

			<div className="channel-tab__divider"></div>

			{/* DMs */}
			<h2 className="channel-tab__title">
				<Icon className="icon" icon={faCaretDown} /> Direct messages
			</h2>
			<ul className="channel-tab__list">{mappedDms}</ul>
			<button className="channel-tab__create" onClick={() => switchDisplay()}>
				<Icon className="icon" icon={faPlusCircle} /> New conversation
			</button>
		</div>
	);
};

export default ChannelTab;
