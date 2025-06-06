import React from 'react';
import styles from "./Work.module.css";
import PageNav from "../components/PageNav";
import GalleryList from "../components/GalleryList";

//under return
/* <GalleryList /> */

export default function DigitalArt() {
	return (
		<main className={styles.workPageGrid}>
			<PageNav />
			<div className={styles.workContainer}>
				<section>
					<div className={styles.workAboutGrid}>
						<h1>
							<span className={styles.workPageh1Color}>Illustration </span>
							work
						</h1>
						<p>
							I was born in 1993, and I fondly remember growing up playing video
							games on the Super Nintendo with my family and friends.
							
						</p>
					</div>
					<GalleryList />
				</section>
			</div>
		</main>
	);
}
