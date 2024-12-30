export const content = [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  extend: {
    colors: {
      defaultBg: '#EAEAEA',
      inputBg: '#E0E0E0'
    },
    borderRadius: {
      '4': '4px',
    },
    inset: {
      'custom-65': '65.8px',
    },
  },
}; export const plugins = [
  function ({ addUtilities }) {
    addUtilities({
      '.default-border': {
        border: '1px solid #CACACA',
      },
      '.default-outline': {
        outline: '1px solid #CACACA'
      },
      '.input-width': {
        width: '35rem',
      },
    });
  },
];

