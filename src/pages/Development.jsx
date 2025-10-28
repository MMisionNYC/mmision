import React from 'react';
import { Helmet } from 'react-helmet';
import styles from "./Work.module.css";
import PageNav from "../components/PageNav";
import GalleryList from "../components/GalleryList";

export default function Development() {
	return (
			<>
			  <Helmet>
				<title>Development | Melissa Mision</title>
				<link rel="canonical" href="https://www.melissamision.com/development" />
				<meta name="description" content="Development projects by Melissa Mision" />
				<meta property="og:image" content="https://www.melissamision.com/workAboutGrid.JPG" />
			  </Helmet>
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-WDNYYB8KSK"></script>
<script>
		window.dataLayer = window.dataLayer || [];
 		function gtag(){dataLayer.push(arguments);}
  		gtag('js', new Date());
  		gtag('config', 'G-WDNYYB8KSK');
</script>
			<main className={styles.workPageGrid}>
			<PageNav />
			<div className={styles.workContainer}>
				<section>
					<div className={styles.workAboutGrid}>
						<h1>
							<span className={styles.workPageh1Color}>Development </span>
							work
						</h1>
						<p>
							I enjoy working on projects that engage and immerse audiences to interact with a webpage. I&apos;m fluent in javaScript (vanilla and React), PHP, CSS/SASS and HTML structure. I have experience developing in Wordpress, Shopify and Contently.
						</p>
					</div>
					<GalleryList />
				</section>
			</div>
		</main>
		</>
	);
}
