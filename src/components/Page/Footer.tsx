import React, { FC } from "react";
import { Icon, faHeart } from "src/helpers/icons";

/**
 * Page footer
 */

const Footer: FC = (): JSX.Element => (
	<footer className="footer no-select">
		<p className="footer__left">
			Slack clone for{" "}
			<a href="https://www.novity.io/" title="Novity website">
				Novity
			</a>{" "}
			tech test {new Date().getFullYear()}.
		</p>
		<p className="footer__right">
			Made with <Icon className="icon" icon={faHeart} /> by{" "}
			<a href="https://harij.vercel.app" title="Developer's website">
				Harijaona
			</a>
			.
		</p>
	</footer>
);

export default Footer;
