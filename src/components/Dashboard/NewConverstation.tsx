import React, { FC, SyntheticEvent, useContext, useState } from "react";
import PanelWrapper from "src/components/Dashboard/PanelWrapper";
import { faPlusCircle } from "src/helpers/icons";
import Spinner from "src/components/Page/Spinner";
import { UserContext } from "src/hooks/useUser";
import { IChannel } from "src/helpers/interfaces";
import { ChannelContext } from "src/hooks/useChannel";
import { PanelContext } from "src/hooks/usePanel";

/**
 * New conversation form
 */

const NewConverstation: FC = (): JSX.Element => {
	const { user } = useContext(UserContext);
	const { switchDisplay } = useContext(PanelContext);
	const { addChannel } = useContext(ChannelContext);
	const [loading, setLoading] = useState<boolean>(false);
	const [form, setForm] = useState({
		type: "channel",
		name: "",
		email: "",
	});

	// Updates a field in form data
	const updateValue = (
		field: string,
		e: SyntheticEvent<HTMLInputElement | HTMLSelectElement>
	): void => {
		setForm({ ...form, [field]: e.currentTarget.value });
	};

	// Submits form
	const handleSubmit = (e: SyntheticEvent<HTMLFormElement>): void => {
		let ch: IChannel = { ...form };
		e.preventDefault();
		setLoading(true);
		console.log(form);
		ch.owner = user?.email || "";
		ch.members = [user?.email || ""];
		if (ch?.email) delete ch.email;
		if (form.type !== "channel") ch.members.push(form?.email || "");
		addChannel(ch)
			?.then(() => {
				console.log("Done");
				switchDisplay(null);
			})
			.catch((e) => console.error(e))
			.finally(() => setLoading(false));
	};

	return (
		<div className="new-conversation">
			<PanelWrapper title="New conversation" icon={faPlusCircle}>
				<form className="new-conversation__form" onSubmit={handleSubmit}>
					{/* Type of the new conversation */}
					<div className="input-group">
						<label className="label" htmlFor="type">
							Type
						</label>
						<select
							className="input"
							name="type"
							value={form.type}
							onChange={(e) => updateValue("type", e)}
						>
							<option value="channel">Channel</option>
							<option value="dm">Direct message</option>
						</select>
					</div>
					{/* Channel name if channel */}
					{form.type === "channel" && (
						<div className="input-group">
							<label className="label" htmlFor="type">
								Channel name
							</label>
							<input
								className="input"
								type="text"
								placeholder="Enter name"
								value={form.name}
								onChange={(e) => updateValue("name", e)}
								required
							/>
						</div>
					)}
					{/* Recipient e-mail if direct message */}
					{form.type !== "channel" && (
						<div className="input-group">
							<label className="label" htmlFor="type">
								Recipient e-mail
							</label>
							<input
								className="input"
								type="email"
								placeholder="Enter email"
								value={form.email}
								onChange={(e) => updateValue("email", e)}
								required
							/>
						</div>
					)}
					{/* Submit */}
					{!loading && (
						<button className="submit" type="submit">
							Create {form.type === "channel" ? "channel" : "DM"}
						</button>
					)}
					{loading && <Spinner alt />}
				</form>
			</PanelWrapper>
		</div>
	);
};

export default NewConverstation;
