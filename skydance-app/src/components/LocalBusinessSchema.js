import Script from "next/script";

export function LocalBusinessSchema() {
    return (
        <Script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": ["LocalBusiness", "DanceSchool"],
                    name: "Sky Dance Studio",
                    url: "https://skydancestudio.com.au",
                    image: "https://skydancestudio.com.au/logo.png",

                    address: {
                        "@type": "PostalAddress",
                        streetAddress: "8/219 Parramatta Rd",
                        addressLocality: "Auburn",
                        addressRegion: "NSW",
                        postalCode: "2144",
                        addressCountry: "AU",
                    },

                    areaServed: [
                        { "@type": "City", name: "Sydney" },
                        { "@type": "Place", name: "Auburn" },
                        { "@type": "Place", name: "Lidcombe" },
                        { "@type": "Place", name: "Parramatta" }
                    ],


                    telephone: "+61 2 8957 9170",

                    description:
                        "Sky Dance Studio offers ballet, jazz, hip hop, K-pop and Chinese dance classes in Auburn, Sydney for children and adults.",

                    sameAs: [
                        "https://www.instagram.com/yourpage",
                        "https://www.tiktok.com/@skydancestudio2020",
                    ],
                }),
            }}
        />
    );
}