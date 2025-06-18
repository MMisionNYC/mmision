import React from 'react';
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import SpinnerFullPage from "./components/SpinnerFullPage.jsx";

const SlotGacor404 = lazy(() => import("./pages/SlotGacor404"));
const Homepage = lazy(() => import("./pages/Homepage"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Development = lazy(() => import("./pages/Development"));
const DigitalIllustration = lazy(() => import("./pages/DigitalIllustration"));
const FineArts = lazy(() => import("./pages/FineArts"));

function App() {
	return (
			<Suspense fallback={<SpinnerFullPage />}>
				<Routes>
					<Route index element={<Homepage />} />
					<Route path="about" element={<About />} />
					<Route path="portfolio" element={<Portfolio />} />
					<Route path="development" element={<Development />} />
		  			<Route path="digitalIllustration" element={<DigitalIllustration />} />
					<Route path="fineArts" element={<FineArts />} />
			         	<Route path="slot-gacor*" element={<SlotGacor404 />} />
				</Routes>
			</Suspense>
	);
}

export default App;
