/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // ─── COLOR SYSTEM (Material You — Green / Forest palette) ───────────────
      colors: {
        "on-primary-fixed":             "#002116",
        "surface-container-lowest":     "#ffffff",
        "on-tertiary-container":        "#9ba09e",
        "on-secondary-fixed-variant":   "#2f4c43",
        "primary-container":            "#0f3d2e",
        "secondary-container":          "#c9eadd",
        "on-error":                     "#ffffff",
        "secondary-fixed":              "#c9eadd",
        "on-primary":                   "#ffffff",
        "on-surface-variant":           "#414944",
        "tertiary-container":           "#323736",
        "background":                   "#fcf9f8",
        "surface-bright":               "#fcf9f8",
        "tertiary":                     "#1d2221",
        "on-secondary-container":       "#4d6a60",
        "secondary":                    "#47645a",
        "surface-container-low":        "#f6f3f2",
        "on-primary-fixed-variant":     "#234f3f",
        "surface-variant":              "#e5e2e1",
        "outline":                      "#717974",
        "error-container":              "#ffdad6",
        "on-tertiary-fixed-variant":    "#434847",
        "surface":                      "#fcf9f8",
        "on-primary-container":         "#7ba894",
        "on-background":                "#1c1b1b",
        "inverse-surface":              "#313030",
        "surface-tint":                 "#3b6756",
        "primary-fixed":                "#beedd7",
        "primary-fixed-dim":            "#a2d1bb",
        "on-secondary-fixed":           "#022019",
        "on-tertiary":                  "#ffffff",
        "on-error-container":           "#93000a",
        "secondary-fixed-dim":          "#adcec1",
        "surface-container-high":       "#eae7e7",
        "surface-dim":                  "#dcd9d9",
        "tertiary-fixed-dim":           "#c3c7c6",
        "on-surface":                   "#1c1b1b",
        "inverse-on-surface":           "#f3f0ef",
        "surface-container":            "#f0eded",
        "error":                        "#ba1a1a",
        "on-tertiary-fixed":            "#181d1c",
        "inverse-primary":              "#a2d1bb",
        "tertiary-fixed":               "#dfe3e1",
        "on-secondary":                 "#ffffff",
        "primary":                      "#00261a",   // ← main brand green
        "outline-variant":              "#c0c8c3",
        "surface-container-highest":    "#e5e2e1",
      },

      // ─── BORDER RADIUS ───────────────────────────────────────────────────────
      borderRadius: {
        DEFAULT: "0.25rem",
        lg:      "0.5rem",
        xl:      "0.75rem",
        full:    "9999px",
      },

      // ─── SPACING TOKENS ──────────────────────────────────────────────────────
      spacing: {
        unit:          "8px",
        "stack-sm":    "16px",
        gutter:        "24px",
        "stack-md":    "32px",
        "container-max": "1280px",
        "section-gap": "120px",
      },

      // ─── FONT FAMILIES ───────────────────────────────────────────────────────
      fontFamily: {
        "body-lg":     ["Inter", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-xl": ["Plus Jakarta Sans", "sans-serif"],
        "label-caps":  ["Inter", "sans-serif"],
        "body-md":     ["Inter", "sans-serif"],
      },

      // ─── FONT SIZES ──────────────────────────────────────────────────────────
      fontSize: {
        "body-lg":    ["18px", { lineHeight: "1.6",  letterSpacing: "0",     fontWeight: "400" }],
        "headline-md":["32px", { lineHeight: "1.3",  letterSpacing: "0.01em",fontWeight: "700" }],
        "headline-lg":["48px", { lineHeight: "1.2",  letterSpacing: "0.01em",fontWeight: "700" }],
        "headline-xl":["64px", { lineHeight: "1.1",  letterSpacing: "0.02em",fontWeight: "800" }],
        "label-caps": ["14px", { lineHeight: "1.0",  letterSpacing: "0.1em", fontWeight: "600" }],
        "body-md":    ["16px", { lineHeight: "1.6",  letterSpacing: "0",     fontWeight: "400" }],
      },

      // ─── MAX WIDTH SHORTHAND ─────────────────────────────────────────────────
      maxWidth: {
        "container-max": "1280px",
      },
    },
  },
  plugins: [],
}
