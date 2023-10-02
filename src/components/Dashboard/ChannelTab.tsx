import React, { FC, useContext } from "react";
import { Icon, faCaretDown, faPlusCircle } from "src/helpers/icons";
import { UserContext } from "src/hooks/useUser";
import { AVATAR_DEFAULT, GENERAL, YOU } from "src/helpers/const";
import { PanelContext } from "src/hooks/usePanel";
import NewConverstation from "./NewConverstation";
import { IChannel } from "src/helpers/interfaces";
import { ChannelContext } from "src/hooks/useChannel";

/**
 * Lists channels here
 */

const ChannelTab: FC = (): JSX.Element => {
	const { user } = useContext(UserContext);
	const { switchDisplay } = useContext(PanelContext);
	const { channelList, dmList, selectedChannel, selectChannel } =
		useContext(ChannelContext);

	// List of channels to be displayed
	const mappedChannels: JSX.Element[] = channelList.map((item: IChannel) => (
		<li
			className={`channel-tab__item${
				selectedChannel === item.id ? " channel-tab__item--selected" : ""
			}`}
			key={item.id}
			onClick={() => selectChannel(item.id || "")}
		>
			<div className="content"># {item.name}</div>
		</li>
	));

	// List of direct messages to be displayed
	const mappedDms: JSX.Element[] = dmList.map((item: IChannel) => (
		<li
			className={`channel-tab__item${
				selectedChannel === item.id ? " channel-tab__item--selected" : ""
			}`}
			key={item.id}
			onClick={() => selectChannel(item.id || "")}
		>
			<div className="content">
				<img className="avatar" src={AVATAR_DEFAULT} alt="Avatar" /> {item.name}
			</div>
			<div className={`status${true && " status--active"}`}></div>
		</li>
	));

	return (
		<div className="channel-tab no-select">
			{/* Channels */}
			<h2 className="channel-tab__title">
				<Icon className="icon" icon={faCaretDown} /> Channels
			</h2>
			<ul className="channel-tab__list">
				<li
					className={`channel-tab__item${
						selectedChannel === GENERAL.id ? " channel-tab__item--selected" : ""
					}`}
					key={GENERAL.id}
					onClick={() => selectChannel(GENERAL.id || "")}
				>
					<div className="content"># {GENERAL.name}</div>
				</li>
				{mappedChannels}
			</ul>

			<div className="channel-tab__divider"></div>

			{/* DMs */}
			<h2 className="channel-tab__title">
				<Icon className="icon" icon={faCaretDown} /> Direct messages
			</h2>
			<ul className="channel-tab__list">
				<li
					className={`channel-tab__item${
						selectedChannel === YOU.id ? " channel-tab__item--selected" : ""
					}`}
					key={YOU.id}
					onClick={() => selectChannel(YOU.id || "")}
				>
					<div className="content">
						<img className="avatar" src={user?.photoURL || ""} alt="Avatar" />{" "}
						{YOU.name}
					</div>
					<div className="status status--active"></div>
				</li>
				{mappedDms}
			</ul>
			<button
				className="channel-tab__create"
				onClick={() => switchDisplay(<NewConverstation />)}
			>
				<Icon className="icon" icon={faPlusCircle} /> New conversation
			</button>
		</div>
	);
};

export default ChannelTab;
