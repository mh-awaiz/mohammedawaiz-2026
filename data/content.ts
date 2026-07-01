export const socials = {
  linkedin: "https://www.linkedin.com/in/-mohammed-awaiz/",
  instagram: "https://www.instagram.com/awaiz167/",
  email: "awaizshamshad@gmail.com",
};

export type Project = {
  name: string;
  category: string;
  description: string;
  stack: string[];
  url: string;
  image: string;
};

export const projects: Project[] = [
  {
    name: "Webraft Studio",
    category: "Growth Agency",
    description:
      "Marketing site for a digital growth agency — custom websites, SEO, paid ads, and Google Business Profile optimization for UAE businesses.",
    stack: ["Next.js", "MongoDB", "NextAuth", "Razorpay", "Gemini AI"],
    url: "https://www.webraftstudio.in/",
    image: "/projects/webraft.png",
  },
  {
    name: "CViEx",
    category: "AI SaaS",
    description:
      "AI-powered resume builder with a real-time suggestion engine, auth, dashboards, and PDF export — built for ATS-friendly resumes.",
    stack: ["Next.js", "Supabase", "PostgreSQL", "Tailwind", "Framer Motion"],
    url: "https://www.cviex.com/",
    image: "/projects/cviex.png",
  },
  {
    name: "StockIQ",
    category: "AI Finance Tool",
    description:
      "Free AI stock analysis engine — screens stocks against a transparent 100-point formula, then explains results in plain English.",
    stack: ["Next.js", "MongoDB", "Gemini AI", "Tailwind"],
    url: "https://stockanalyzer-umber.vercel.app/",
    image: "/projects/stockiq.png",
  },
  {
    name: "Kapil Store",
    category: "Marketplace",
    description:
      "A student superstore — food, groceries, stationery, assignment help, and tuition services in one ordering platform.",
    stack: ["Next.js", "MongoDB", "Node.js", "Tailwind"],
    url: "https://kapilstore.in/",
    image: "/projects/kapilstore.png",
  },
  {
    name: "Qalbi Couture",
    category: "E-commerce",
    description:
      "A boutique fashion storefront with a full catalogue, collections, and checkout — built for a premium clothing brand.",
    stack: ["Next.js", "Tailwind", "Framer Motion", "Stripe"],
    url: "https://qalbi-store.vercel.app/",
    image: "/projects/qalbicouture.png",
  },
  {
    name: "Maysour",
    category: "Automotive Marketplace",
    description:
      "UAE marketplace for inspected, certified used cars — 200-point inspection scoring, live inventory, financing calculator, and a sell-your-car flow.",
    stack: ["Next.js", "Tailwind", "Framer Motion", "TypeScript"],
    url: "https://maysour-sooty.vercel.app/",
    image: "/projects/maysour.png",
  },
  {
    name: "The Destination Planners",
    category: "Travel",
    description:
      "A travel agency site with custom package browsing, destination discovery, and WhatsApp-first enquiry flow.",
    stack: ["React.js", "Tailwind", "Framer Motion"],
    url: "https://destination-planner-one.vercel.app/",
    image: "/projects/destinationplanners.png",
  },
  {
    name: "TRS — The Robotics Society, JMI",
    category: "Institutional",
    description:
      "Official website for Jamia Millia Islamia's Robotics Society — events, teams, and member onboarding for a student-run tech body.",
    stack: ["React.js", "Tailwind CSS", "Framer Motion"],
    url: "https://official-trs-website.vercel.app/",
    image: "/projects/trs.png",
  },
];

export const techStack = {
  Frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
  ],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  Database: ["MongoDB", "PostgreSQL", "Supabase", "Firebase"],
  "AI & Tools": ["Gemini AI", "OpenAI", "Git", "Docker", "Figma", "Postman"],
};
