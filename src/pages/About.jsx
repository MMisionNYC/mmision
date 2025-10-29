import React from 'react';
import { Helmet } from 'react-helmet';
import PageNav from "../components/PageNav";
import styles from "./About.module.css";

export default function About() {
	    const onButtonClick = () => {
        const pdfUrl = "../src/pages/resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
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
							I&apos;m
							<span className={styles.aboutPageh1Color}> Melissa.</span>
						</h1>
						<p>
Creative front-end developer with 5+ years of experience bridging design and development. Skilled in JavaScript, React, and project lifecycle management. 
<br></br>
<br></br>
Experienced in leading website migrations, improving UI responsiveness, and coordinating multi-stakeholder digital projects. Passionate about building accessible, user-focused digital experiences.
<br></br>
<br></br>
艺术 应该 是 亻尤 受欢迎的, 安全的 和 有 经历.
每个人 小路 相交 和生一起 艺术.{" "}
						</p>
					<div className={styles.doubleButtons}>
						<a href="https://github.com/MMisionNYC?tab=repositories">
						<button className="button-btnStyle">
						{/* <ButtonLoad /> */}
						<div className={styles.btnText}>GitHub</div>
						</button>
						</a>
						<a>
						<button onClick={onButtonClick} className="button-btnStyle">
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
