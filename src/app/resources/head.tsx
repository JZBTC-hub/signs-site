// src/app/resources/head.tsx
export default function Head() {
  const title = "SIGNS";
  const description =
    "Official links, how to buy, ecosystem, and crypto basics for the SIGNS community.";
  const url = "https://<your-domain>/resources"; // set your domain

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {/* <meta property="og:image" content="https://<your-domain>/images/og-signs.png" /> */}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content="https://<your-domain>/images/og-signs.png" /> */}

      {/* Canonical (optional) */}
      <link rel="canonical" href={url} />
    </>
  );
}
