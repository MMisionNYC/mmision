import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Work.module.css";

export default function Portfolio() {
	return (
	<>
		<Helmet>
			<title>Portfolio | Melissa Mision</title>
			<link rel="canonical" href="https://www.melissamision.com/portfolio" />
			<meta name="description" content="Melissa Mision's professional portfolio, featuring works from development, fine arts and digital illustration." />
			<meta property="og:image" content="https://www.melissamision.com/workpage-banner.jpg" />
			</Helmet>
		<main className={styles.workPage}>
			<PageNav />
			<div className={styles.workContainer}>
				<section>
					<div className={styles.workAbout}>
					<div className={styles.workAboutText}>
						<h1>
							You&apos;re welcome <br></br>to
							<span className={styles.workPageh1Color}>
								{" "}wander.
							</span>
						</h1>
						</div>
					</div>
					<div className={styles.bannerContainer}>
						<Link reloadDocument to={"/Development"}>
							<div className={styles.dev}>
								<h2>Development</h2>
							</div>
						</Link>
						<Link reloadDocument to={"/DigitalIllustration"}>
							<div className={styles.pixelArt}>
								<h2>Digital Illustration</h2>
							</div>
						</Link>
						<Link reloadDocument to={"/FineArts"}>
							<div className={styles.fineArts}>
								<h2>Fine Arts</h2>
							</div>
						</Link>
					</div>
				</section>
			</div>
		</main>
		</>
	);
}
