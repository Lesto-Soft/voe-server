export default {
  testEnvironment: "node", // Ensure Jest uses the Node environment
  transform: {
    "^.+\\.js$": "babel-jest", // Use Babel to transform `.js` files
  },
};
