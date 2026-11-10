// Camping App - Theme & Design Tokens
// Extracted from Sketch Styleguide (camping-ui-kit-faiz-anwar.sketch)

export const colors = {
  primary: "#65A30D",       // Lime 600
  primaryDark: "#4D7C0F",   // Lime 700
  primaryDeep: "#3F6212",   // Lime 800
  primaryForest: "#365314", // Lime 900
  primaryVibrant: "#84CC16",// Lime 500
  primaryLight: "#A3E635",  // Lime 400
  primaryPastel: "#BEF264", // Lime 300
  primaryPale: "#D9F99D",   // Lime 200
  primarySoft: "#ECFCCB",   // Lime 100
  primaryBg: "#F7FEE7",     // Lime 50

  // Supporting & Neutrals
  dark: "#18181B",          // Zinc 900
  darkMuted: "#27272A",     // Zinc 800
  darkSecondary: "#3F3F46", // Zinc 700
  grayDark: "#52525B",      // Zinc 600
  gray: "#71717A",          // Zinc 500
  grayLight: "#A1A1AA",     // Zinc 400
  border: "#D4D4D8",        // Zinc 300
  cardBg: "#E4E4E7",        // Zinc 200
  bgLight: "#F4F4F5",       // Zinc 100
  background: "#FAFAFA",    // Zinc 50
  white: "#FFFFFF",

  // Status & Badges
  accentRed: "#EA1601",
  accentYellow: "#FAD202",
  accentGreen: "#64BC26",
  accentBlue: "#2563EB",
};

export const typography = {
  h1: { fontSize: 32, fontWeight: "700", lineHeight: 38 },
  h2: { fontSize: 24, fontWeight: "700", lineHeight: 30 },
  h3: { fontSize: 20, fontWeight: "600", lineHeight: 26 },
  h4: { fontSize: 18, fontWeight: "600", lineHeight: 24 },
  bodyLarge: { fontSize: 16, fontWeight: "400", lineHeight: 24 },
  bodyMedium: { fontSize: 14, fontWeight: "400", lineHeight: 20 },
  bodySmall: { fontSize: 12, fontWeight: "400", lineHeight: 16 },
  caption: { fontSize: 11, fontWeight: "500", lineHeight: 14 },
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const radius = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 24,
  xl: 32,
  full: 9999,
};

export const shadows = {
  sm: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 8,
  },
};
