module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/", "/server/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  transform: {
    "^.+\\.[tj]sx?$": "babel-jest", // Use Babel for all TS/JS
  },

  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|@react-native|@react-navigation|expo(nent)?|expo-modules-core)/",
  ],
};
