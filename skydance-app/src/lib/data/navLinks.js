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
    title: "DANCE",
    link: "/class/dance",
    children: [
      { title: "CLASS", link: "/class/dance" },
      {
        title: "COMPETITION TEAM",
        link: "/class/dance/competition-team-training",
      },
      { title: "PROGRAMS", link: "/class/dance/programs" },
    ],
  },
  { title: "ENROL", link: "/enrol" },
  { title: "EVENTS", link: "/events" },
  { title: "STUDIO HIRE", link: "/studiohire" },
  { title: "CONTACT US", link: "/contact" },
];

export default navLinks;
