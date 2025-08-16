// app/about/head.tsx
export default function Head() {
  const title = "About — SIGNS | Club for Extravagant Degenerates";
  const description =
    "SIGNS is a luxury-leaning crypto culture club: conviction, patience, and wealth-building — where the lifestyle does the talking.";
  const url = "https://YOUR_DOMAIN/about";
  const ogImage = "https://YOUR_DOMAIN/images/og/signs-about-og.jpg"; // 1200x630 recommended
  const twitterImage = ogImage; // reuse or set a 1200x675

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SIGNS",
    "url": "https://YOUR_DOMAIN",
    "logo": "https://YOUR_DOMAIN/images/logo.png",
    "sameAs": [
      "https://x.com/YOUR_HANDLE",
      "https://t.me/YOUR_TELEGRAM",
      "https://discord.gg/YOUR_INVITE"
    ],
    "description": description
  };

  return (
    <>
      {/* Primary meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="SIGNS, crypto, meme, luxury, wealth, community, conviction" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SIGNS" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={twitterImage} />
      <meta name="twitter:site" content="@YOUR_HANDLE" />
      <meta name="twitter:creator" content="@YOUR_HANDLE" />

      {/* Robots */}
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />

      {/* Mobile + Theme */}
      <meta name="theme-color" content="#000000" />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
