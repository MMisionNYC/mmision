import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
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
		<main className={styles.homepage}>
			<PageNav />
			<section>
				<h1>
					<span className="homePageHeaderh1Spacing">Art should</span>
					<br />
					<span className="homePageHeaderh1">be </span>
					<span id="highlight" className="highlightWord">captivating.</span>
				</h1>
				<Link to="/portfolio">
					<button className="button-btnStyle">
						{/* <ButtonLoad /> */}
						<div className={styles.btnText}>gallery</div>
					</button>
				</Link>
			</section>
		</main>
			</>
	);
}
