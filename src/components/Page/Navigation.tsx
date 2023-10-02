import React, { FC, useState, SyntheticEvent } from "react";
import { Icon, faSearch } from "src/helpers/icons";
import { AVATAR_DEFAULT, LOGO } from "src/helpers/const";

/**
 * Navigation component
 */

const Navigation: FC = (): JSX.Element => {
	const [searchText, setSearchText] = useState<string>("");

	// Updates state value of text search
	const searchUpdate = (e: SyntheticEvent<HTMLInputElement>): void => {
		setSearchText(e.currentTarget.value);
	};

	// When user submits search form
	const submit = (e: SyntheticEvent<HTMLFormElement, SubmitEvent>): void => {
		e.preventDefault();
		console.log("Searching", searchText);
	};

	return (
		<nav className="navigation no-select">
			<div className="navigation__container">
				{/* App title */}
				<div className="navigation__title">
					<img className="logo" src={LOGO} alt="Logo" />
					<h1 className="title">Salama !</h1>
				</div>

				{/* Search bar */}
				<form className="navigation__search" onSubmit={submit}>
					<input
						className="input"
						type="text"
						name="search"
						value={searchText}
						placeholder="Search something"
						onChange={searchUpdate}
					/>
					<button className="button" type="submit">
						<Icon className="icon" icon={faSearch} /> Search
					</button>
				</form>

				{/* Logout */}
				<div className="navigation__logout" title="Logout from your account">
					<img className="avatar" src={AVATAR_DEFAULT} alt="User avatar" />
					<p className="username">Logout</p>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
