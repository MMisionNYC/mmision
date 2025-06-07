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
        <meta property="og:image" content="https://www.melissamision.com/homepage-background.jpg" />
      </Helmet>
      <h1>Home Page</h1>
		<main className={styles.homepage}>
			<PageNav />
			<section>
				<h1>
					<span className="homePageHeaderh1Spacing">Let&apos;s create</span>
					<br />
					<span className="homePageHeaderh1">something </span>
					<span className="highlightWord">captivating.</span>
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
