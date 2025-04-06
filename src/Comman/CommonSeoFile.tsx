import React from 'react';
import { Helmet } from 'react-helmet-async';

function CommonSeoFile({
  title,
  description,
  robots = { index: true, follow: true },
  openGraph = {},
  twitter = {},
  canonical,
}) {

  return (
    <Helmet>
      {/* Title and Description */}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}

      {/* Robots Meta Tag */}
      
      {robots && (
        <meta
          name="robots"
          content={`${robots.index ? 'index' : 'noindex'}, ${robots.follow ? 'follow' : 'nofollow'}, max-video-preview:-1, max-image-preview:large, max-snippet:-1`}
        />
      )}

      {/* Open Graph Tags */}
      {openGraph?.title && <meta property="og:title" content={openGraph.title} />}
      {openGraph?.description && <meta property="og:description" content={openGraph.description} />}
      {openGraph?.url && <meta property="og:url" content={`http://localhost:5173${openGraph.url}`} />}
      {openGraph?.siteName && <meta property="og:site_name" content={openGraph.siteName} />}
      {openGraph?.locale && <meta property="og:locale" content={openGraph.locale} />}
      <meta property="og:image" content={""} />


      {twitter?.card && <meta name="twitter:card" content={twitter.card} />}
      {twitter?.site && <meta name="twitter:site" content={twitter.site} />}
      {twitter?.creator && <meta name="twitter:creator" content={twitter.creator} />}
      {twitter?.title && <meta name="twitter:title" content={twitter.title} />}
      {twitter?.description && <meta name="twitter:description" content={twitter.description} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={""} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`http://localhost:5173${canonical}`} />}
    </Helmet>
  );
}

export default CommonSeoFile;
