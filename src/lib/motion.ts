export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] } },
};

export function staggerChildren(stagger = 0.08, delayChildren = 0) {
  return {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  };
}

export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeInOut" },
};

export const tapScale = {
  scale: 0.95,
  transition: { duration: 0.1 },
};


