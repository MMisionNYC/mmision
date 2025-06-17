import React from 'react';
import { Helmet } from 'react-helmet';
import PageNav from "../components/PageNav";
import styles from "./About.module.css";

export default function About() {
	return (
			<>
			  <Helmet>
				<title>About | Melissa Mision</title>
				<link rel="canonical" href="https://www.melissamision.com/about" />
				<meta name="description" content="About Melissa Mision, contact, resume and github information." />
				<meta property="og:image" content="https://www.melissamision.com/aboutPage-Container-Background.jpg" />
			  </Helmet>
		<main className={styles.aboutPage}>
			<PageNav />
			<div className={styles.aboutContainer}>
				<section>
						<h1>
							Hello, world!<br></br> I&apos;m
							<span className={styles.aboutPageh1Color}> Melissa.</span>
						</h1>
						<p>
 Nice to meet you! I&apos;m skilled at creating responsive and visually appealing web interfaces using HTML, CSS, PHP, vanilla JavaScript, React and
 Angular. I&apos;m familiar with developing to CMS systems such as Wordpress, Contently and Shopify. I have a solid work ethic and a strong focus on delivering high-quality, efficient code while optimizing user experience and user accessibility best
 practices.{" "}
							<br></br>
							<br></br> In my free-time I can be found where the cats and dogs
							are. I also love to illustrate, go on trails and get lost in
							nature&apos;s beauty. When I&apos;m not outdoors, I enjoy
							immersing myself in 2d video games, podcasts and comedy standups.
						</p>
					<div className={styles.doubleButtons}>
						<a href="https://github.com/MMision/melissamision">
						<button className="button-btnStyle">
						{/* <ButtonLoad /> */}
						<div className={styles.btnText}>GitHub</div>
						</button>
						</a>
						<a href="https://drive.google.com/file/d/1jG69oGKZTFYEzmtyJgQhpRFnYqxgK7Xp/view?usp=sharing">
						<button className="button-btnStyle">
						{/* <ButtonLoad /> */}
						<div className={styles.btnText}>Resume</div>
					</button>
					</a>
					</div>
				</section>
			</div>
		</main>
		</>
	);
}
