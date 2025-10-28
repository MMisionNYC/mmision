import React from 'react';
import { Helmet } from 'react-helmet';
import styles from "./Work.module.css";
import PageNav from "../components/PageNav";
import GalleryList from "../components/GalleryList";

//under return
/* <GalleryList /> */

export default function DigitalArt() {
	return (
			<>
			  <Helmet>
				<title>Digital Illustrations | Melissa Mision</title>
				<link rel="canonical" href="https://www.melissamision.com/digitalillustration" />
				<meta name="description" content="Digital illustrations done by Melissa Mision. Created with Aseprite, Photoshop, Wacom Intuos Tablet." />
				<meta property="og:image" content="https://www.melissamision.com/workAboutGrid.JPG" />
			  </Helmet>
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
		</>
	);
}
