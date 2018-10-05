var log=console.log;


var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');



log(results);