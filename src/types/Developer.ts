export interface Developer {
    name: string;
    role: string;
    skills: string[];
    expertise: {
      architectures: string[];
      reactDesingPatterns: string[];
      designPatterns: string[];
      deployment: string[];
    };
    additionalKnowledge: string[];
    passion: string;
  }
  
  export const developer: Developer = {
    name: "Juan Laspiur",
    role: "Full Stack Developer",
    skills: ["React", "React Native", "Next.js","Node.js", "MongoDB", "TypeScript"],
    expertise: {
      architectures: ["Microservices", "Monolithic", "Serverless"],
      reactDesingPatterns: [
        "Higher Order Components (HOC)",
        "Compound Components",
        "Controlled & Uncontrolled Components",
        "Hooks Pattern (Custom Hooks)",
        "Provider Pattern (Context API)",
        "State Reducer Pattern",
        "Function as Child (FaCC)",
      ],
      designPatterns: ["MVC", "Factory", "Observer", "Singleton"],
      deployment: ["SSH", "VPN", "AWS EC2", "S3", "NGINX", "CloudFront"],
    },
    additionalKnowledge: ["Next.js", "Java", "SQL"],
    passion: "Building scalable web & mobile apps 🚀",
  };
  