import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  publishedAt,
  modifiedAt,
  author,
  section,
  tags = []
}) => {
  const siteName = 'Mukuba Economic Research and Consulting Firm';
  const siteUrl = 'https://mukubaecon.io';
  const defaultImage = '/assets/company-logo.jpg';
  
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image ? `${siteUrl}${image}` : `${siteUrl}${defaultImage}`;
  
  const fullKeywords = [
    'economic research',
    'consulting firm',
    'Zambia',
    'economic development',
    'policy analysis',
    'feasibility studies',
    'capacity building',
    'economic indicators',
    'GDP analysis',
    'parliamentary submissions',
    ...keywords
  ].join(', ');

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={fullKeywords} />
      {author && <meta name="author" content={author} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
      
      {/* Article specific meta tags */}
      {type === 'article' && publishedAt && (
        <meta property="article:published_time" content={publishedAt} />
      )}
      {type === 'article' && modifiedAt && (
        <meta property="article:modified_time" content={modifiedAt} />
      )}
      {type === 'article' && author && (
        <meta property="article:author" content={author} />
      )}
      {type === 'article' && section && (
        <meta property="article:section" content={section} />
      )}
      {type === 'article' && tags.length > 0 && (
        <meta property="article:tag" content={tags.join(', ')} />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Geo targeting for Zambia */}
      <meta name="geo.region" content="ZM" />
      <meta name="geo.placename" content="Lusaka, Zambia" />
      <meta name="geo.position" content="-15.4167;28.2833" />
      <meta name="ICBM" content="-15.4167, 28.2833" />
    </Helmet>
  );
};

export default SEOHead;
