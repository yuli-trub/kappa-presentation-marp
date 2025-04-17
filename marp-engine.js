const markdownItContainer = require("markdown-it-container");

// adding the extensiont to the engine
module.exports = ({ marp }) => {
  marp.markdown.use(markdownItContainer, "grid");

  return marp;
};

// works only for marp CLI (npm run preview)
//  doesn't work with nested extension so had to use renderer stuff from marp docs usage
