const { Marpit } = require('@marp-team/marpit');
const fs = require('@supercharge/fs');

const marpit = new Marpit({
    markdown: {
        enableHtml: true
    }
});
fs.content("./themes/sunset.css").then((value) => { marpit.themeSet.add(value) });
fs.content("./themes/midnight.css").then((value) => { marpit.themeSet.add(value) });