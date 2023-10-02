import React, { FC, createContext, useState, useEffect } from "react";
import { query, collection, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "src/helpers/firebase";
import { IChannel } from "src/helpers/interfaces";
import { GENERAL } from "src/helpers/const";

/**
 * Channel hook and context
 */

interface IChannelContext {
	channelList: IChannel[];
	dmList: IChannel[];
	selectedChannel: string;
	addChannel: (c: IChannel) => Promise<unknown> | null;
	selectChannel: (id: string) => void;
}

const defaultValues = {
	channelList: [],
	dmList: [],
	selectedChannel: GENERAL.id || "",
	addChannel: () => null,
	selectChannel: () => null,
};

// Create a context with default values
export const ChannelContext = createContext<IChannelContext>(defaultValues);

interface IChannelProvider {
	email: string;
	children: JSX.Element;
}

export const ChannelProvider: FC<IChannelProvider> = ({
	email,
	children,
}): JSX.Element => {
	const [channelList, setChannelList] = useState<IChannel[]>(
		defaultValues.channelList
	);
	const [dmList, setDmList] = useState<IChannel[]>(defaultValues.dmList);
	const [selectedChannel, setSelectedChannel] = useState<string>(
		defaultValues.selectedChannel
	);

	useEffect(() => {
		const q = query(collection(db, "channels"));
		const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
			const fetchedChannels: IChannel[] = [];
			QuerySnapshot.forEach((doc) => {
				const data = doc.data();
				fetchedChannels.push({
					id: doc.id,
					type: data.type,
					name: data.name,
					owner: data.owner,
					members: data.members,
				});
			});
			setChannelList(
				fetchedChannels.filter(
					(item: IChannel) =>
						item.type === "channel" &&
						(item.members?.includes(email) || item.owner === email)
				)
			);
			setDmList(
				fetchedChannels.filter(
					(item: IChannel) =>
						item.type !== "channel" &&
						(item.members?.includes(email) || item.owner === email)
				)
			);
		});
		return () => unsubscribe();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const addChannel = (channel: IChannel): Promise<unknown> =>
		addDoc(collection(db, "channels"), channel);

	const selectChannel = (id: string) => setSelectedChannel(id);

	const value: IChannelContext = {
		channelList,
		dmList,
		selectedChannel,
		addChannel,
		selectChannel,
	};

	return (
		<ChannelContext.Provider value={value}>{children}</ChannelContext.Provider>
	);
};
