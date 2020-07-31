const theme = {
  media: {
    mobile: [320, 360],
    desktop: [1024],
  },
  fonts: {
    body: "Roboto, Helvetica, sans-serif",
    title: "Darker Grotesque",
    monospace: "Menlo, monospace",
  },
  default:{
    borderRadius: '10px',
    spacing: {
      units: 0.5,
      metric: 'rem',
      value: ()=>`${theme.default.spacing.units}${theme.default.spacing.metric}`
    },
    logo: {
      mono: "/assets/logo/idaLogoMono.svg",
      color: {
        url: "/assets/logo/idaLogoColor.svg",
        width: 184,
        height: 65,
      },
    },
  },
  colors: {
    none: "transparent",
    background: "#1D1D1D",
    accent: "#1D1D1D",
    primary: "#6523CF",
    secondary: "#FFF",
    muted: "#AAA",
    error: "#FF2626",
    success: "#48F3A7",
  },
  texts: {
    title: {
      fontWeight: "bold",
      sizes: {
        h1: 32,
        h2: 24,
        h3: 18,
      },
    },
    body: {
      fontWeight: "normal",
      fontFamily: ["Roboto", "Arial", "Helvetica", "sans-serif"],
      sizes:{
        h1: 18,
        h2: 16,
        h3: 14,
        h4: 12,
      },
    },
  },
  modal: {
    overlaybgColor: "rgba(0,0,0,.7)",
    gradientColorsTop: "rgba(48,48,48,1)",
    padding: 16,
    sizes: {
      mobile: [
        {
          width: 255,
          smallHeight: 305,
          bigHeight: 315,
        },
        {
          width: 302,
          smallHeight: 315,
          bigHeight: 513,
        },
      ],
      desktop: [
        {
          width: 400,
          smallHeight: 400,
          bigHeight: 560,
        },
      ],
    },
  },
}

export default theme;
