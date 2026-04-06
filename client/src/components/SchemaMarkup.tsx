import { useEffect } from 'react';

interface SchemaMarkupProps {
  type: 'Article' | 'BreadcrumbList' | 'FAQPage' | 'Product' | 'LocalBusiness';
  data: Record<string, any>;
}

const SchemaMarkup = ({ type, data }: SchemaMarkupProps) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': type,
      ...data,
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [type, data]);

  return null;
};

export const ArticleSchema = (props: {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) => (
  <SchemaMarkup
    type="Article"
    data={{
      headline: props.headline,
      description: props.description,
      image: props.image,
      datePublished: props.datePublished,
      dateModified: props.dateModified || props.datePublished,
      author: {
        '@type': 'Organization',
        name: props.author || 'MyRealTrip Coupon',
      },
    }}
  />
);

export const FAQSchema = (props: {
  faqs: Array<{ question: string; answer: string }>;
}) => (
  <SchemaMarkup
    type="FAQPage"
    data={{
      mainEntity: props.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    }}
  />
);

export const BreadcrumbSchema = (props: {
  items: Array<{ name: string; url: string }>;
}) => (
  <SchemaMarkup
    type="BreadcrumbList"
    data={{
      itemListElement: props.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    }}
  />
);

export const ProductSchema = (props: {
  name: string;
  description: string;
  price: string;
  priceCurrency: string;
  availability: string;
  rating?: number;
  reviewCount?: number;
}) => (
  <SchemaMarkup
    type="Product"
    data={{
      name: props.name,
      description: props.description,
      offers: {
        '@type': 'Offer',
        price: props.price,
        priceCurrency: props.priceCurrency,
        availability: props.availability,
      },
      ...(props.rating && {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: props.rating,
          reviewCount: props.reviewCount || 1,
        },
      }),
    }}
  />
);

export default SchemaMarkup;
