import React, { FC, Fragment } from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import ChannelTab from "src/components/Dashboard/ChannelTab";
import Conversation from "src/components/Dashboard/Conversation";
// import SidePanel from "src/components/Dashboard/SidePanel";

/**
 * Main dashboard
 */

const Dashboard: FC = (): JSX.Element => {
	return (
		<DefaultLayout>
			<Fragment>
				<ChannelTab />
				<Conversation />
				{/* <SidePanel /> */}
			</Fragment>
		</DefaultLayout>
	);
};

export default Dashboard;
