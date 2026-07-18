import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
}

export function SEO({ title, description, image, noindex = false }: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      {noindex && <meta name="robots" content="noindex" />}
    </Helmet>
  );
}
