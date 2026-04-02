// We intentionally avoid React hooks here to prevent 'Invalid hook call' errors

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

// SEO Constants for K.R. Saravanakumar
export const SEO_CONFIG = {
  siteName: 'K.R. Saravanakumar Official',
  siteUrl: 'https://tvkkasipalayam.in',
  defaultTitle: 'K.R. Saravanakumar (KRS) | TVK Town Panchayat Secretary | சரவணகுமார்',
  defaultDescription: 'K.R. Saravanakumar (KRS) - Official Website. TVK Town Panchayat Secretary, Kasipalayam, Gobichettipalayam, Erode. சரவணகுமார் - தமிழக வெற்றி கழகம் பேரூராட்சி செயலாளர். Contact: +91 86676 70083',
  defaultKeywords: 'K.R. Saravanakumar, KRS, Saravanakumar, Saravanan, சரவணகுமார், சரவணன், KR Saravanakumar, K R Saravanakumar, Kasipalayam Saravanakumar, TVK Saravanakumar, TVK Kasipalayam, Town Panchayat Secretary, Gobichettipalayam, Erode, Tamil Nadu, Tamilaga Vettri Kazhagam, தமிழக வெற்றி கழகம், krsaravanakumar, krsaravanakumar.in, TVK Leader Erode, TVK Gobichettipalayam, Kasipalayam Ramalingam Saravanakumar, KRS TVK, KRS Official',
  defaultImage: '/assets/saravanan.png',
  twitterHandle: '@krsaravanakumar',
  locale: 'ta_IN',
  phone: '+91 86676 70083',
  email: 'tvk.krsaravanan@gmail.com',
  address: {
    street: 'Near Bus Stop, Kasipalayam Main Road',
    locality: 'Kasipalayam, Gobichettipalayam',
    region: 'Tamil Nadu',
    postalCode: '638454',
    country: 'India',
    coordinates: {
      latitude: 11.4539,
      longitude: 77.4374
    }
  },
  defaultImageWidth: 1200,
  defaultImageHeight: 800
};

// Alternative names for search visibility
export const ALTERNATE_NAMES = [
  'K.R. Saravanakumar',
  'KRS',
  'Saravanakumar',
  'Saravanan',
  'சரவணகுமார்',
  'சரவணன்',
  'K R Saravanakumar',
  'KR Saravanakumar',
  'Kasipalayam Saravanakumar',
  'Kasipalayam Ramalingam Saravanakumar',
  'TVK Saravanakumar',
  'TVK KRS',
  'krsaravanakumar',
  'Erode Saravanakumar',
  'Gobichettipalayam Saravanakumar'
];

// Hook to dynamically update page title and meta
export function useSEO(config: SEOConfig = {}) {
  // fallback safe implementation that does not rely on React hooks
  if (typeof document === 'undefined') return;
  const {
    title = SEO_CONFIG.defaultTitle,
    description = SEO_CONFIG.defaultDescription,
  } = config;

  try {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) metaDescription.setAttribute('content', description);
  } catch (e) {
    // ignore in non-browser environments
  }
}

// Component to add hidden SEO content (for crawlers)
export function SEOContent() {
  return (
    <div className="sr-only" aria-hidden="true">
      <h1>K.R. Saravanakumar - KRS - TVK Town Panchayat Secretary</h1>
      <h2>சரவணகுமார் - தமிழக வெற்றி கழகம் பேரூராட்சி செயலாளர்</h2>
      <p>
        K.R. Saravanakumar (KRS) is the Town Panchayat Secretary of Tamilaga Vettri Kazhagam (TVK) 
        in Kasipalayam, Gobichettipalayam, Erode District, Tamil Nadu, India.
      </p>
      <p>
        Saravanakumar, also known as Saravanan, is dedicated to serving the people with integrity, 
        commitment, and a vision for inclusive growth.
      </p>
      <address>
        Office Address: Near Bus Stop, Kasipalayam Main Road, Kasipalayam, 
        Gobichettipalayam, 638454, Erode, Tamil Nadu, India
      </address>
      <p>Contact: +91 86676 70083</p>
      <p>Email: tvk.krsaravanan@gmail.com</p>
      
      {/* Alternative names for SEO */}
      <ul>
        {ALTERNATE_NAMES.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      
      {/* Related keywords */}
      <p>
        TVK Leader, Tamilaga Vettri Kazhagam, Vijay TVK, Tamil Nadu Politics, 
        Erode District TVK, Gobichettipalayam TVK, Kasipalayam TVK Leader,
        கே.ஆர். சரவணகுமார், தமிழக வெற்றி கழகம் தலைவர், ஈரோடு மாவட்டம்,
        கோபிச்செட்டிபாளையம், காசிபாளையம் பேரூராட்சி செயலாளர்
      </p>
    </div>
  );
}

// Generate structured data for a person
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "K.R. Saravanakumar",
    "alternateName": ALTERNATE_NAMES,
    "description": SEO_CONFIG.defaultDescription,
    "image": {
      "@type": "ImageObject",
      "url": `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`,
      "width": SEO_CONFIG.defaultImageWidth,
      "height": SEO_CONFIG.defaultImageHeight
    },
    "url": SEO_CONFIG.siteUrl,
    "telephone": SEO_CONFIG.phone,
    "email": SEO_CONFIG.email,
    "jobTitle": "Town Panchayat Secretary",
    "worksFor": {
      "@type": "Organization",
      "name": "Tamilaga Vettri Kazhagam (TVK)"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SEO_CONFIG.address.street,
      "addressLocality": SEO_CONFIG.address.locality,
      "addressRegion": SEO_CONFIG.address.region,
      "postalCode": SEO_CONFIG.address.postalCode,
      "addressCountry": "IN"
    }
  };
}

// Generate LocalBusiness Schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TVK Kasipalayam - Tamilaga Vettri Kazhagam",
    "description": "Official local office and headquarters of Tamilaga Vettri Kazhagam (TVK) political party in Kasipalayam, Gobichettipalayam, Erode District, Tamil Nadu",
    "image": `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`,
    "url": SEO_CONFIG.siteUrl,
    "telephone": SEO_CONFIG.phone,
    "email": SEO_CONFIG.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SEO_CONFIG.address.street,
      "addressLocality": SEO_CONFIG.address.locality,
      "addressRegion": SEO_CONFIG.address.region,
      "postalCode": SEO_CONFIG.address.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SEO_CONFIG.address.coordinates.latitude,
      "longitude": SEO_CONFIG.address.coordinates.longitude
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": SEO_CONFIG.phone,
      "contactType": "Customer Service"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };
}

// Generate Organization Schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tamilaga Vettri Kazhagam (TVK)",
    "alternateName": ["TVK", "தமிழக வெற்றி கழகம்"],
    "description": "Tamilaga Vettri Kazhagam is a Tamil Nadu based political organization working for social welfare and democratic values",
    "url": SEO_CONFIG.siteUrl,
    "logo": `${SEO_CONFIG.siteUrl}/assets/text.png`,
    "image": `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`,
    "telephone": SEO_CONFIG.phone,
    "email": SEO_CONFIG.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SEO_CONFIG.address.street,
      "addressLocality": SEO_CONFIG.address.locality,
      "addressRegion": SEO_CONFIG.address.region,
      "postalCode": SEO_CONFIG.address.postalCode,
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "K.R. Saravanakumar"
    },
    "sameAs": [
      "https://www.facebook.com/tvkkasipalayam",
      "https://www.youtube.com/tvkkasipalayam"
    ]
  };
}

// Image SEO Schema
export function generateImageSchema(imageUrl: string, imageName: string, personName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    "url": imageUrl,
    "name": `${personName} - ${imageName}`,
    "description": `Professional portrait of ${personName}, member of Tamilaga Vettri Kazhagam (TVK)",
    "uploadDate": new Date().toISOString().split('T')[0]
  };
}

export default SEOContent;
