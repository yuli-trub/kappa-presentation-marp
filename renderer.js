const fs = require("fs");
const path = require("path");
const { Marpit } = require("@marp-team/marpit");
const markdownItContainer = require("markdown-it-container");
const markdownItNestedContainer = require("@kazumatu981/markdown-it-nested-container");

const marpit = new Marpit({
  markdown: {
    html: true,
    breaks: true,
  },
});

const themeCSS = fs.readFileSync(
  path.resolve(__dirname, "my-theme.css"),
  "utf8"
);

marpit.themeSet.default = marpit.themeSet.add(themeCSS);

// using all of the packages
marpit.markdown.use(markdownItContainer, "grid");
marpit.markdown.use(markdownItNestedContainer);

const markdown = fs.readFileSync("./slides.md", "utf8");

const { html, css } = marpit.render(markdown);

fs.writeFileSync(
  "output.html",
  `<html><head><style>${css}</style></head><body>${html}</body></html>`
);
