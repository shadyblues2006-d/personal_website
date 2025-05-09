// Import resume data directly from JSON file
const resumeData = {
  personal_info: {
    name: "Diti Chhaproo",
    phone: "+1 (217) 819-0564",
    email: "ditichhaproo@gmail.com",
    linkedin: "linkedin.com/in/ditichhaproo"
  },
  education: {
    university: "University of Illinois Urbana-Champaign",
    degree: "BSc in Systems Engineering and Design",
    graduation_date: "May 2027",
    gpa: "3.83/4.0",
    coursework: [
      "Calc 1 & 2",
      "Engineering Graphics & Design",
      "Business Side of Engineering",
      "Introduction to Electronics",
      "University Physics: Mechanics, Elec & Mag, Quantum"
    ]
  },
  projects: [
    {
      title: "Goldman Sachs Possibilities Summit",
      role: "Selected Participant",
      duration: "January 2025 - Present",
      description: "Selected for the Women's Possibilities Summit with a 4% acceptance rate, gaining insights into financial markets, leadership, and career development from industry experts."
    },
    {
      title: "Illinois Business Consulting",
      role: "Experienced Consultant",
      duration: "September 2024 – Present",
      description: [
        "Consulted for a strategic partnership project underlying the 7 frontiers of technology alongside a Big Four Corporation",
        "Worked with a team where we interviewed 50+ industry experts and recommended frameworks to secure the company's evolution in this growing field",
        "Conducted cost analysis and investment optimization for a global logistics firm in the Gulf region"
      ]
    },
    {
      title: "Project Kareeb",
      role: "Founder",
      duration: "May 2023 - August 2024",
      description: [
        "Developed a holistic curriculum for 25+ underprivileged students with parental engagement",
        "Introduced and conducted health and sex-education lectures as I tutored young girls from humble backgrounds with STEM experiments whilst completing 70 hours of community service."
      ]
    },
    {
      title: "Global Confluence MUN",
      role: "Director General (2023) and Secretary General (2024)",
      duration: "May 2023 - August 2024",
      description: [
        "Established a 40-member secretariat and spearheaded the organisation of one of Mumbai's most esteemed MUNs, ensuring exceptional event management and participant engagement.",
        "Drove a marketing campaign (400+ attendees, 30K+ reach) for event growth.",
        "Facilitated a high-level meeting with UN Ambassador Parminder Singh to discuss active relief efforts in the Russo-Ukraine war, strengthening the event's educational value and international prestige."
      ]
    }
  ],
  publications: [
    {
      title: "Effect of tyre materials on self-balancing robot",
      authors: "Diti Chhaproo, Reetu Jain",
      date: "May 2023 - August 2023",
      publisher: "International Journal of Software & Hardware Research in Engineering (IJSHRE)"
    }
  ],
  internships: [
    {
      company: "Furtados School of Music",
      duration: "April 2024 – August 2024",
      description: [
        "Developed a code that converts piano input into a MIDI file on the cloud server to enable live music grading",
        "Began the CAD development of a device that would be provided to over 250,000+ students around the world with Furtados' partner schools"
      ]
    },
    {
      company: "CMS Info Systems",
      duration: "July 2023–August 2023",
      description: [
        "Created datasets of face masks, covers and helmets to train the RaspberryPi model that would be used with 70,000 ATM CCTV cameras to conduct data analysis",
        "Learned the applications of the software in-depth and presented a finished software to the CMS executive board which executed with 98% accuracy"
      ]
    }
  ],
  skills: {
    technical: [
      "C++",
      "Python",
      "Arduino",
      "Java",
      "HTML",
      "Basic IBM Qiskit",
      "MS Excel",
      "MS Access",
      "Fusion 360 Senior Automation CAD",
      "Fast-Fourier transform"
    ],
    soft: [
      "Literature Review",
      "Experimental Design",
      "Project Management",
      "Cold Calling",
      "Event Planning",
      "Leadership",
      "Team Management",
      "Content Writing"
    ]
  },
  honors: [
    "High School Valedictorian",
    "EKPHARSIS-II: Poetry National Winner for 'Dali and I - his mighty dream'"
  ]
};

export default resumeData;