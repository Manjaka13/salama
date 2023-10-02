import React, { FC, Fragment } from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import ChannelTab from "src/components/Dashboard/ChannelTab";
import Conversation from "src/components/Dashboard/Conversation";
import SidePanel from "src/components/Dashboard/SidePanel";
import { PanelProvider } from "src/hooks/usePanel";

/**
 * Main dashboard
 */

const Dashboard: FC = (): JSX.Element => {
	return (
		<DefaultLayout>
			<PanelProvider>
				<Fragment>
					<ChannelTab />
					<Conversation />
					<SidePanel />
				</Fragment>
			</PanelProvider>
		</DefaultLayout>
	);
};

export default Dashboard;
