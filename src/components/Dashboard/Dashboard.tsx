import React, { FC, Fragment, useContext } from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import ChannelTab from "src/components/Dashboard/ChannelTab";
import Conversation from "src/components/Dashboard/Conversation";
import SidePanel from "src/components/Dashboard/SidePanel";
import { PanelProvider } from "src/hooks/usePanel";
import { ChannelProvider } from "src/hooks/useChannel";
import { UserContext } from "src/hooks/useUser";

/**
 * Main dashboard
 */

const Dashboard: FC = (): JSX.Element => {
	const { user } = useContext(UserContext);

	return (
		<DefaultLayout>
			<ChannelProvider email={user?.email || ""}>
				<PanelProvider>
					<Fragment>
						<ChannelTab />
						<Conversation />
						<SidePanel />
					</Fragment>
				</PanelProvider>
			</ChannelProvider>
		</DefaultLayout>
	);
};

export default Dashboard;
