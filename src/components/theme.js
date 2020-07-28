const theme = {
  media: {
    mobile: [320, 360],
    desktop: [1024],
  },
  fonts: {
    body: "Roboto, Arial, Helvetica, sans-serif",
    title: "Darker Grotesque",
    monospace: "Menlo, monospace",
  },
  default: {
    borderRadius: 10,
    spacing: 8,
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
    defaultBg: "#1D1D1D",
    primary: "#6523CF",
    secondary: "#FFF",
    inactive: "#AAA",
    error: "#FF2626",
    success: "#48F3A7",
  },
  buttons: {
    fontSize: {
      default: "16px",
      link: "12px",
    },
    padding: {
      default: "12px 24px",
      link: "16px 24px",
    },
    primary: {
      background: () => theme.colors.primary,
    },
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
      sizes: {
        h1: 18,
        h2: 16,
        h3: 14,
        h4: 12,
      },
    },
  },
  modal: {
    overlaybgColor: "rgba(0,0,0,.7)",
    gradientColors: {
      top: "rgba(48,48,48,1)",
      bottom: () => `${theme.colors.defaultBg}`,
    },
    padding: () => theme.default.spacing * 3,
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
};

export default theme;
