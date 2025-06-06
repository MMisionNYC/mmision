import React from 'react';
import styles from "./PageNav.module.css";
import Logo from "./Logo";
import NavLinks from "../components/NavLinks";
import {MdOutlineMenu} from 'react-icons/md'
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";

const MobileNavigation = () => {
const [click, setClick] = useState(false);
const closeMenu = () => setClick(false);

const Hamburger = <MdOutlineMenu className={styles.HamburgerMenu}
size="30px" color="white" cursor="pointer" onClick={() => setClick(!click)} />

const Close = <IoCloseCircleOutline className={styles.closeMenu}
size="30px" color="white" position="absolute" right="10%" cursor ="pointer" onClick={() => setClick(!click)} />
	
return (
	<nav className={styles.MobileNavigation}>
	<Logo />
	<div className={styles.MobileBack}>
	{ click ? Close : Hamburger }
	{click && <NavLinks isClicked={true} closeMenu={closeMenu}/>}
	</div>
	</nav>
);
}
export default MobileNavigation;