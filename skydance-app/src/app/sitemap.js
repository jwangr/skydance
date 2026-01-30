export default function sitemap() {
  return [
    {
      url: "https://skydancestudio.com.au",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://skydancestudio.com.au/enrol",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.9, // High priority - key conversion page
    },
    {
      url: "https:/skydancestudio.com.au/class/dance",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9, // Important - main classes page
    },
    {
      url: "https://skydancestudio.com.au/class/dance/programs",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://skydancestudio.com.au/about/team",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://skydancestudio.com.au/about/story",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: "https://skydancestudio.com.au/events",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8, // Changes frequently with new events
    },
    {
      url: "https://skydancestudio.com.au/studiohire",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://skydancestudio.com.au/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];
}
