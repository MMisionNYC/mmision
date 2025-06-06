import React from 'react';
import { useState, useRef, useEffect } from "react";
import { PropTypes } from "prop-types";
import GalleryData from "../data/GalleryData.jsx";
import styles from "../components/GalleryList.module.css";

function GalleryList() {
	return (
		<div className={styles.gallery}>
				{GalleryData.map((gallery) => (
					<Gallery galleryObj={gallery} key={gallery.name} />
				))}
		</div>
	);
}

function Gallery({ galleryObj }) {
	const [isOpenModal, setIsOpenModal] = useState(false);
const toggle = () => setIsOpenModal(!isOpenModal);

	Gallery.propTypes = {
		galleryObj: PropTypes.shape({
			name: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
			bulletName: PropTypes.string.isRequired,
			bulletPoints: PropTypes.string.isRequired,
			bulletPoints2: PropTypes.string.isRequired,
			imagePath: PropTypes.bool.isRequired,
		}),
	};
	const myRef = useRef(null);

	function ExecuteScroll() {
		useEffect(() => {
		myRef.current.scrollIntoView({ behavior: 'smooth', block: 'center',})    // window.scrollTo({ top: testAgain, behavior: "smooth" });
	})
}
// test.scrollIntoView({ behavior: 'smooth', block: 'center' });
// its currently centering div placement before it clicks open. need to find a way to center it AFTER modal opens

	return (
		<div id="box"
			onClick={() => setIsOpenModal(!isOpenModal)}
			className={`${isOpenModal ? styles["overlay"] : styles["overlayNone"]}`}
			ref={myRef}

		>
			<div
				className={`${
					isOpenModal
						? styles["modalBackground"]
						: styles["modalBackgroundNone"]
				}`}
				onClick={toggle}
			>
			{isOpenModal && <ExecuteScroll />}

				<img
					src={galleryObj.imagePath}
					alt={galleryObj.name}
					className={`${
						isOpenModal ? styles["galleryPrevModal"] : styles["galleryPrev"]
					}`}
				/>
				<div
					className={`${isOpenModal ? styles["modalText"] : styles["none"]}`}
				>
					<h2 className={`${isOpenModal ? styles["modalh2"] : styles["none"]}`}>
						{galleryObj.name}
					</h2>
					{/* <hr className={`${isOpenModal ? styles["gradient"] : styles["none"]}`}>
					</hr> */}
					<p className={`${isOpenModal ? styles["modalp"] : styles["none"]}`}>
						{galleryObj.description}
					</p>
					<hr className={`${isOpenModal ? styles["gradient"] : styles["none"]}`}>
					</hr>
					<h3 className={`${isOpenModal ? styles["modalh3"] : styles["none"]}`}>
						{galleryObj.bulletName}
					</h3>		
					{/* <hr className={`${isOpenModal ? styles["gradient"] : styles["none"]}`}>
					</hr>			 */}
					<ul className={`${isOpenModal ? styles["modalBullet"] : styles["none"]}`}>
						<li>
						{galleryObj.bulletPoints}
						</li>
						<li>
						{galleryObj.bulletPoints2}
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default GalleryList;
