import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import PropTypes from 'prop-types';

 const NavLinks = ({isClicked, closeMenu}) => {
	return (
		<nav className={styles.NavLinks}>
			<ul>
				<li onClick={() => isClicked && closeMenu()}>
					<NavLink to="/portfolio">portfolio</NavLink>
				</li>
				{/* <li>
					<NavLink to="/contact">contact</NavLink>
				</li> */}
				{/* <li>
					<NavLink to="/artclasses">art classes</NavLink>
				</li> */}
				<li onClick={() => isClicked && closeMenu()}>
					<NavLink to="/about">about</NavLink>
				</li>
			</ul>
		</nav>
	);
}
NavLinks.propTypes = {
  isClicked: PropTypes.bool.isRequired,
  closeMenu: PropTypes.func.isRequired,
};
export default NavLinks;