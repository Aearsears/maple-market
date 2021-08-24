module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        "Antique-Brass": "#cb997e",
        "Desert-Sand": "#ddbea9",
        "Champagne-Pink": "#ffe8d6",
        "Ash-Gray": "#b7b7a4",
        Artichoke: "#a5a58d",
        Ebony: "#6b705c",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

//* Extended Array */
// [{"name":"Antique Brass","hex":"cb997e","rgb":[203,153,126],"cmyk":[0,25,38,20],"hsb":[21,38,80],"hsl":[21,43,65],"lab":[67,15,21]},{"name":"Desert Sand","hex":"ddbea9","rgb":[221,190,169],"cmyk":[0,14,24,13],"hsb":[24,24,87],"hsl":[24,43,76],"lab":[79,8,15]},{"name":"Champagne Pink","hex":"ffe8d6","rgb":[255,232,214],"cmyk":[0,9,16,0],"hsb":[26,16,100],"hsl":[26,100,92],"lab":[93,5,12]},{"name":"Ash Gray","hex":"b7b7a4","rgb":[183,183,164],"cmyk":[0,0,10,28],"hsb":[60,10,72],"hsl":[60,12,68],"lab":[74,-3,10]},{"name":"Artichoke","hex":"a5a58d","rgb":[165,165,141],"cmyk":[0,0,15,35],"hsb":[60,15,65],"hsl":[60,12,60],"lab":[67,-4,12]},{"name":"Ebony","hex":"6b705c","rgb":[107,112,92],"cmyk":[4,0,18,56],"hsb":[75,18,44],"hsl":[75,10,40],"lab":[46,-6,10]}]
