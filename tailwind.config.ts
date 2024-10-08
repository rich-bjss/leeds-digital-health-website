import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"
const defaultTheme = require("tailwindcss/defaultTheme")
const tailwindMdBase = require("@geoffcodesthings/tailwind-md-base")

export default {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    markdownBase: {
      wrapperClass: "content",
      p: {
        marginTop: 0,
        marginBottom: defaultTheme.spacing[4]
      },
      a: {
        textDecoration: "none",
        color: "#D90699",
        fontWeight: "bold",
        "&:hover": {
          color: "#D90699",
          textDecoration: "none",
          fontWeight: "bold"
        }
      }
    },
    extend: {
      colors: {
        pink: {
          DEFAULT: "#D90699"
        },
        navy: {
          DEFAULT: "#041E42"
        },
        gray: {
          50: "#f9fafc"  
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)"]
      },
      keyframes: {
        loading: {
          '0%': {
            color: '#F490B6'
          },
          '50%': {
            color: '#FCE7F3 '
          },
          '100%': {
            color: '#F490B6 '
          }
        }
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [typography, tailwindMdBase()]
} satisfies Config
