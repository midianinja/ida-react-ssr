const theme = {
  media: {
    mobile: [320, 360],
    desktop: [1024],
  },
  default: {
    fontFamily: ['Roboto', 'Arial', 'Helvetica', 'sans-serif'],
    borderRadius: 10,
    spacing: 8,
  },
  colors: {
    none: 'transparent',
    defaultBg: '#1d1d1d',
    primary: '#6523CF',
    secondary: '#FFF',
    inactive: '#AAA',
    error: '#FF2626',
    success: '#48F3A7',
  },
  buttons: {
    padding: '10px 28px',
  },
  texts: {
    title: {
      fontWeight: 'bold',
      fontFamily: ['Darker Grotesque', 'Arial', 'Helvetica', 'sans-serif'],
      sizes: {
        h1: 32,
        h2: 24,
        h3: 18,
      },
    },
    body: {
      fontWeight: 'normal',
      sizes: {
        h1: 18,
        h2: 16,
        h3: 14,
        h4: 12,
      },
    },
  },
  modal: {
    overlaybgColor: 'rgba(0,0,0,.7)',
    gradientColors: {
      top: 'rgba(48,48,48,1)',
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
