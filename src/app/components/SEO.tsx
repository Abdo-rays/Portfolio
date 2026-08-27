import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title = "Abdelrahman Mohamed - Full-stack Developer | React & Next.js Expert",
  description = "full-stack Developer specializing in React, Next.js, and TypeScript. Building fast, accessible, and production-ready web applications with modern tools and best practices.",
  keywords = "Full-stack Developer, React Developer, Next.js Developer, TypeScript, Web Development, UI/UX, Portfolio, Abdelrahman Mohamed, JavaScript, Tailwind CSS",
  image = "https://images.unsplash.com/photo-1737575655055-e3967cbefd03?w=1200&h=630&fit=crop",
  url = "#",
}: SEOProps) {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Abdelrahman Mohamed" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Abdelrahman Mohamed Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@ibrahimashraf" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#000000" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Abdelrahman Mohamed",
          url: url,
          image: image,
          jobTitle: "Front-end Developer",
          description: description,
          knowsAbout: ["React", "Next.js", "TypeScript", "JavaScript", "Web Development"],
          sameAs: [
            "https://github.com/Abdo-rays",
            "https://www.linkedin.com/in/abdelrahman-mohamed-1287872a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app#",
            "#",
          ],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Alexandria",
            addressCountry: "Egypt",
          },
        })}
      </script>
    </Helmet>
  );
}