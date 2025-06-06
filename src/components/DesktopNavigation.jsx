import React from 'react';
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import NavLinks from "../components/NavLinks";

export default function DesktopNavigation() {
	return (
		<nav className={styles.DesktopNavigation}>
			<Logo />
			<NavLinks />
		</nav>
	);
}
