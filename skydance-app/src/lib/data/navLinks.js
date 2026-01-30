const navLinks = [
  { title: "HOME", link: "/" },
  {
    title: "ABOUT US",
    link: "/about",
    children: [
      { title: "OUR TEAM", link: "/about/team" },
      { title: "OUR STORY", link: "/about/story" },
    ],
  },
  {
    title: "CLASSES",
    link: "/class",
    children: [
      { title: "DANCE", link: "/class/dance" },
      { title: "ART", link: "/class/art" },
      { title: "MUSIC", link: "/class/music" },
      { title: "TUTORING", link: "/class/tutoring" },
    ],
  },
  { title: "ENROL", link: "/enrol" },
  { title: "EVENTS", link: "/events" },
  { title: "STUDIO HIRE", link: "/studiohire" },
  { title: "CONTACT US", link: "/contact" },
];

export default navLinks;
