// SlotGacor404.jsx
import React from "react";
import { Helmet } from "react-helmet";

export default function SlotGacor404() {
  return (
    <>
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>404 - Not Found</title>
      </Helmet>
      <div>
        <h1>404 - This Page Does Not Exist</h1>
        <p>If you landed here by accident, don’t worry. This page is blocked from search engines.</p>
      </div>
    </>
  );
}
