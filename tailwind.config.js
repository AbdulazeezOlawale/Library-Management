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
  },
}; export const plugins = [
  function ({ addUtilities }) {
    addUtilities({
      '.default-outline': {
        outline: '2px solid #CACACA', // Use outline instead of border
      },
      '.input-width': {
        width: '30rem',
      },
    });
  },
];

