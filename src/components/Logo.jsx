import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Logo.module.css";

function Logo() {
	return (
	<div className={styles.NavLinkLogo}>
		<Link to="/">
			<img src="/logo.PNG" alt="Melissa Mision logo" className={styles.logo} />
		</Link>
	</div>
	);
}

export default Logo;
