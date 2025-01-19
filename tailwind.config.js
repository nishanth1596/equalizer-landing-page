/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#66e2dc",
        orange: "#fa7453",
        yellow: "#ffb964",
        white: "#fcfaf9",
        slate: "#191826",
      },
      fontFamily: {
        IBM: ["IBM Plex Sans", "serif"], // Custom font family
      },
      fontSize: {
        "fs-1": "5.5rem",
        "fs-2": "4rem",
        "fs-3": "2.5rem",
        "fs-4": "1.25rem",
        "fs-5": "1rem",
        "fs-6": "1.125rem",
      },
      lineHeight: {
        "lh-1": "1",
        "lh-2": "1",
        "lh-3": "1.1",
        "lh-4": "1.5",
        "lh-5": "1.5",
        "lh-6": "1.8",
      },
      letterSpacing: {
        "ls-1": "-1px",
      },
      fontWeight: {
        "fw-1": "700",
        "fw-2": "700",
        "fw-3": "700",
        "fw-4": "400",
        "fw-5": "400",
        "fw-5B": "700",
        "fw-6": "700",
      },
    },
  },
  plugins: [],
};
