export const projectCategories = {
  webdev: {
    label: "Web Dev",
    icon: "🌐",
    projects: [
      {
        title: "SportsTalk – Sports Social Media Platform",
        tech: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Prisma",
          "PostgreSQL",
          "Socket.io",
          "NextAuth",
        ],
        features:
          "Full-stack social media for sports fans with real-time chat, live match discussions, community posts, infinite scroll feed, and user authentication and Socket_io for live messaging and WebSocket connections.",
        live: "https://letsportstalk.vercel.app/",
        github: "https://github.com/An1ketGupta/SportsTalk",
      },
      {
        title: "ApnaBazaar – Local Goods Market",
        tech: [
          "React",
          "Tailwind CSS",
          "JS",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Razorpay",
          "AWS EC2",
        ],
        features:
          "Full-stack marketplace, Razorpay + OAuth, optimized backend (400ms → 300ms), scaled to 500+ users, automated SMS confirmations, product search and filtering with category management.",
        live: "https://apnabzaar.netlify.app/",
        github: "https://github.com/An1ketGupta/Apna-Bazaar",
      },
      {
        title: "Ride Sharing DBMS",
        tech: [
          "React",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "Prisma",
          "Socket.io",
          "Razorpay",
          "Stripe",
          "Tailwind CSS",
          "Vite",
          "JWT",
        ],
        features:
          "Full-stack ride-sharing platform featuring real-time matching via Socket IO, OpenRouteService navigation, multi-gateway payments (Razorpay/Stripe), and advanced safety protocols managed through a comprehensive admin dashboard.",
        live: "",
        github: "https://github.com/An1ketGupta/Ride-sharing-app",
      },
      {
        title: "Competitive Programming Tracker",
        tech: ["MongoDB", "Express.js", "React", "Node.js"],
        features:
          "Tracks contests (CodeChef, LeetCode, Codeforces), 75+ users, 5 APIs integrated, 1000+ data points/day, JWT auth with roles, leaderboard system with user rankings and progress analytics.",
        live: "https://cptracker.netlify.app/",
        github: "https://github.com/An1ketGupta/CP-Tracker",
      },
    ],
  },
  web3: {
    label: "Web3",
    icon: "⛓️",
    projects: [
      {
        title: "AniSwap – Decentralized Exchange",
        tech: [
          "Solidity",
          "Next.js",
          "TypeScript",
          "Ethers.js",
          "Hardhat",
          "Tailwind CSS",
        ],
        features:
          "Full-featured DEX with token swapping, liquidity pools, AMM (Automated Market Maker) implementation. Smart contracts deployed on testnet with frontend integration for seamless Web3 UX.",
        live: "https://aniswap.vercel.app",
        github: "https://github.com/An1ketGupta/AniSwap_DEX",
      },
      {
        title: "Liquid Staking Token Contract",
        tech: ["Solidity", "Hardhat", "Ethereum"],
        features:
          "Smart contract implementation for Liquid Staking Tokens (LST). Enables users to stake ETH and receive liquid tokens representing their staked position, maintaining liquidity while earning staking rewards.",
        live: "",
        github: "https://github.com/An1ketGupta/LST-contract",
      },
      {
        title: "Token Launchpad",
        tech: ["TypeScript", "Solana", "Web3.js"],
        features:
          "Platform for launching custom tokens on Solana blockchain. Streamlined token creation process with customizable parameters, metadata management, and deployment automation.",
        live: "",
        github: "https://github.com/An1ketGupta/token-launchpad",
      },
    ],
  },
  crypto: {
    label: "Cryptography",
    projects: [
      {
        title: "Blind Schnorr Signature Implementation",
        tech: ["Python", "Cryptography", "Blind Signatures", "Schnorr"],
        features:
          "Implements Blind Schnorr Signature scheme with key generation, message blinding, blind signing, unblinding, and final verification. Includes modular scripts (key_gen, blinding, signing, verification) and secure randomization workflow.",
        live: "",
        github: "https://github.com/An1ketGupta/Blind-Signature-Implementation",
      },
      {
        title: "Schnorr Signature Implementation",
        tech: ["Python", "Cryptography", "Schnorr Signatures"],
        features:
          "Full implementation of the Schnorr digital signature algorithm, including key generation, signing, and verification. Uses multiple cryptographic utility libraries and supports secure message signing & authentication.",
        live: "",
        github: "https://github.com/An1ketGupta/Schnorr-Signature",
      },
      {
        title: "NTRU Post-Quantum Cryptography",
        tech: ["Python", "Lattice Cryptography", "Post-Quantum"],
        features:
          "Implementation of NTRU lattice-based cryptographic system. Designed to be resistant to quantum computing attacks, featuring key generation, encryption, and decryption using polynomial ring operations.",
        live: "",
        github: "https://github.com/An1ketGupta/NTRU-implementation",
      },
    ],
  },
};

// Flatten for backward compatibility if needed
export const projects = [
  ...projectCategories.webdev.projects,
  ...projectCategories.web3.projects,
  ...projectCategories.crypto.projects,
];

export const skills = {
  programming: ["JavaScript", "Python", "C++", "TypeScript", "SQL", "CSS"],
  frameworks: ["Next.js", "React.js", "Node.js", "Express.js", "Tailwind CSS"],
  databases: ["MongoDB", "MySQL", "PostgreSQL"],
  web3: ["Ethereum", "Solana", "Foundry", "Anchor", "SPL Token", "Smart Contracts", "DeFi", "AMM"],
  tools: ["Git", "GitHub", "Postman"],
  cloud: ["AWS EC2", "Netlify", "Vercel"],
  specializations: ["REST APIs", "JWT Auth", "Payment Gateway"],
};
