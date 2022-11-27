import Head from "next/head";
import React from "react";

const SeoHead = ({ title, description, image, url }: any) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={process.env.APP_URL + image} />
      <meta property="og:image:url" content={process.env.APP_URL ?? "localhost:3000" + image} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={process.env.APP_URL + image} />
    </Head>
  );
};

export default SeoHead;
