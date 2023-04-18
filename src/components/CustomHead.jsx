import Head from "next/head";
import React from "react";

export default function CustomHead({ pageName, descriptionContent }) {
  return (
    <Head>
      {/* <title>{`Certitude || ${pageName}`}</title> */}
      <title>Certitude</title>
      {/* <meta name="description" content={descriptionContent} /> */}
      <meta name="description" content="desc" />
    </Head>
  );
}
