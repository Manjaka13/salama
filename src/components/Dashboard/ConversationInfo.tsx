import React, { FC } from "react";
import { AVATAR_DEFAULT } from "src/helpers/const";

/**
 * Info about the current conversation
 */

const ConversationInfo: FC = (): JSX.Element => (
	<div className="conversation-info">
		<div className="conversation-info__head">
			<img className="avatar" src={AVATAR_DEFAULT} alt="Profile pic" />
			<div>
				<p className="name">Tantely Ramananarivo</p>
				<p className="email">tantely@novity.io</p>
			</div>
		</div>
		<p className="text">
			You can directly start a conversation with{" "}
			<span className="tag">@Tantely</span>.
		</p>
	</div>
);

export default ConversationInfo;
