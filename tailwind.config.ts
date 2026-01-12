import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        toss: {
          blue: "#3182F6",
          blueLight: "#E8F3FF",
          grey50: "#F9FAFB",
          grey100: "#F2F4F6",
          grey200: "#E5E8EB",
          grey300: "#B0B8C1",
          grey400: "#8B95A1",
          grey500: "#6B7684",
          grey600: "#4E5968",
          grey700: "#333D4B",
          grey800: "#191F28",
          grey900: "#1B1D1F",
        }
      },
      fontFamily: {
        sans: ['"Pretendard"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;