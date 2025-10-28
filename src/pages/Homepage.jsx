import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import Typing from "../components/Typing";
// import ButtonLoad from "../components/ButtonLoad";

export default function Homepage() {
	return (
	<>
      <Helmet>
        <title>Home | Melissa Mision</title>
        <meta name="description" content="Welcome to Melissa Mision's portfolio home page." />
        <link rel="canonical" href="https://www.melissamision.com/" />
	<meta property="og:image" content="https://www.melissamision.com/homepage-background.jpg" />
      </Helmet>
		<!-- Google tag (gtag.js) -->
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-WDNYYB8KSK"></script>
<script>
		window.dataLayer = window.dataLayer || [];
 		function gtag(){dataLayer.push(arguments);}
  		gtag('js', new Date());
  		gtag('config', 'G-WDNYYB8KSK');
</script>
		<main className={styles.homepage}>
			<PageNav />
			<section>
				<h1>
					<span className="homePageHeaderh1Spacing">Let&apos;s create</span>
					<br />
					<span className="homePageHeaderh1">something </span>
					<span id="highlight" className="highlightWord">captivating.</span>
				</h1>
				<Link to="/portfolio">
					<button className="button-btnStyle">
						{/* <ButtonLoad /> */}
						<div className={styles.btnText}>projects</div>
					</button>
				</Link>
			</section>
		</main>
			</>
	);
}
