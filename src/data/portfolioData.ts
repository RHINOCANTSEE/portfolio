export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    headline: string;
    bio: string;
    location: string;
    email: string;
  };
  ticker: {
    franchises: string[];
    publishers: string[];
  };
  impactMatrix: Array<{
    metric: string;
    label: string;
    context: string;
    tag: string;
  }>;
  roadmap: Array<{
    id: string;
    title: string;
    desc: string;
  }>;
  caseStudies: Array<{
    id: string;
    title: string;
    problem: string;
    execution: string;
    result: string;
  }>;
}

export const portfolioData: PortfolioData = {
  profile: {
    name: "Zahidul Hasan Mahin",
    role: "Social Media & Creative Manager | Content Lead & Community Specialist",
    headline: "RECORD-BREAKING SOCIAL MEDIA & GAMING OPERATIONS",
    bio: "Assisting tier-1 publishers, esports leagues, and gaming franchises scale strategic marketing operations, live broadcast desks, and viral distribution that deliver results.",
    location: "Dhaka, Bangladesh",
    email: "connect.zhmahin@gmail.com",
  },
  ticker: {
    franchises: ["PUBG MOBILE", "Free Fire", "Honor of Kings", "Mobile Legends: Bang Bang"],
    publishers: ["Tencent Games", "KRAFTON", "Level Infinite", "Garena", "MOONTON", "Infinix", "Robi"],
  },
  impactMatrix: [
    { metric: "170M+", label: "Peak Regional Reach", context: "PUBG MOBILE & Honor of Kings", tag: "AUDITED" },
    { metric: "1B+", label: "Lifetime Views", context: "Across 4 official channels", tag: "VERIFIED" },
    { metric: "3,000%", label: "Conversion Lift", context: "Link-routing optimization", tag: "SYSTEM_NOMINAL" },
  ],
  roadmap: [
    { id: "PHASE_01", title: "Discovery & Audit", desc: "Telemetry analysis of current audience retention and content friction points to isolate growth bottlenecks." },
    { id: "PHASE_02", title: "Omni-Channel War Room", desc: "Tactical deployment of cross-platform campaigns targeting core gaming demographics with localized assets." },
    { id: "PHASE_03", title: "Live Broadcast Desk & Retention", desc: "Real-time engagement hooks and high-latency chat operations to maximize average watch time during global tournaments." }
  ],
  caseStudies: [
    {
      id: "CS_01",
      title: "PMNC Bangladesh Fall 2026",
      problem: "Fragmented audience engagement and low retention during off-season community qualifiers.",
      execution: "Deployed a localized tactical asset pipeline, synchronized cross-platform drops, and activated grassroots community leaders for real-time advocacy.",
      result: "Achieved 3x higher concurrent viewership than previous regional qualifiers with a 45% increase in chat engagement."
    },
    {
      id: "CS_02",
      title: "Operation Green Winter & Bondhu Adda",
      problem: "Disconnection between digital gaming communities and physical on-ground brand presence.",
      execution: "Engineered offline campus activations paired with in-game CSR challenges, unifying virtual achievements with real-world impact.",
      result: "Scaled local community meetups to a nationwide campaign, securing over 10,000+ organic on-ground participants."
    }
  ]
};
