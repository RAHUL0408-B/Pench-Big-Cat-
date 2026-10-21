export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  overview: string;
  highlightsTitle: string;
  highlights: { title: string; description: string }[];
  ctaTitle: string;
  ctaText: string;
  image: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "destination-wedding",
    slug: "destination-wedding",
    title: "Destination Wedding Venue in Pench",
    tagline: "Celebrate Your Forever Amidst Nature!",
    overview:
      "Some beginnings deserve a setting as special as the story itself. Bring your wedding celebrations to Pench Big Cat Nature Resort and create memorable moments with your loved ones in a nature-inspired setting. From gathering with family and friends to celebrating the start of a new chapter, make your wedding an occasion to cherish. Whether you're envisioning an intimate celebration or a larger gathering, our team can help you explore the possibilities for your special day.",
    highlightsTitle: "A Setting for Meaningful Celebrations",
    highlights: [
      {
        title: "A Distinctive Natural Setting",
        description:
          "Give your wedding celebrations a refreshing backdrop inspired by the beauty and tranquillity of the Pench region.",
      },
      {
        title: "Celebrate Together",
        description:
          "Bring your loved ones together to share the joy, traditions and special moments that make a wedding unforgettable.",
      },
      {
        title: "A Celebration to Remember",
        description:
          "Create opportunities for meaningful gatherings, memorable photographs and experiences that stay with you long after the festivities.",
      },
    ],
    ctaTitle: "Begin Your Wedding Story in Pench",
    ctaText:
      "Let us know what you're planning, and connect with our team to discuss your wedding requirements, event arrangements and available options.",
    image: "/images/amenities/bargad-dining.jpg",
  },
  {
    id: "corporate-events",
    slug: "corporate-events",
    title: "Corporate Events & Stays",
    tagline: "Bring Your Team Together, Away from the Everyday",
    overview:
      "Sometimes, a change of setting is all it takes to bring fresh energy to a team. Pench Big Cat Nature Resort offers a nature-inspired setting for corporate stays, team outings and professional gatherings. Step away from everyday routines, spend time together in a different environment and create opportunities for conversations beyond the workplace. Whether you're planning a team getaway, an employee outing or a corporate stay, explore the possibilities for bringing your people together in Pench.",
    highlightsTitle: "A Different Setting for Team Experiences",
    highlights: [
      {
        title: "Team Outings",
        description:
          "Give colleagues an opportunity to spend time together outside the usual work environment and build stronger workplace connections.",
      },
      {
        title: "Corporate Stays",
        description:
          "Plan an overnight or multi-day team getaway with accommodation arrangements suited to your group's requirements.",
      },
      {
        title: "Meetings and Group Gatherings",
        description:
          "Discuss your requirements for corporate gatherings and explore suitable arrangements based on group size and available facilities.",
      },
      {
        title: "Time to Recharge",
        description:
          "Give your team a change of pace with opportunities to relax and enjoy the resort's surroundings during their stay.",
      },
    ],
    ctaTitle: "Plan Your Next Corporate Getaway",
    ctaText:
      "Share your group size, preferred dates and event requirements with our team. We'll help you explore the available options for your corporate visit.",
    image: "/images/property/resort-property-view.jpg",
  },
  {
    id: "school-trips",
    slug: "school-trips",
    title: "School Trips",
    tagline: "Take Learning Beyond the Classroom",
    overview:
      "Some lessons are best experienced outside four walls. A school trip to the Pench region can give students a fresh perspective on nature, wildlife and the environment. Away from the classroom, young learners have an opportunity to observe their surroundings, ask questions and develop a deeper appreciation for the natural world. Pench Big Cat Nature Resort can serve as a base for schools exploring educational group visits, subject to suitable arrangements and activity availability.",
    highlightsTitle: "An Opportunity to Learn Through Experience",
    highlights: [
      {
        title: "Nature and Wildlife Awareness",
        description:
          "Introduce students to the importance of wildlife, forests and the conservation of natural habitats through appropriate educational experiences.",
      },
      {
        title: "Learning Beyond Textbooks",
        description:
          "Encourage curiosity and observation by connecting classroom topics with the natural world.",
      },
      {
        title: "Group Experiences",
        description:
          "Give students opportunities to learn, share observations and engage with their classmates in a different setting.",
      },
      {
        title: "A Thoughtfully Planned Visit",
        description:
          "Coordinate with our team to discuss group accommodation, meals, schedules and any suitable activities that may be available for your school group.",
      },
    ],
    ctaTitle: "Plan an Educational Trip to Pench",
    ctaText:
      "Tell us about your school group, the number of students and teachers, your preferred dates and your learning objectives. Our team can help you discuss suitable arrangements for your visit.",
    image: "/images/property/bamboo-path.jpg",
  },
];
