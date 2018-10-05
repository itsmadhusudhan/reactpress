var fs = require('fs')
var fm = require('front-matter');
var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();
var graymatter=require('gray-matter');

var result=graymatter.read('config/yamlfile.md');
var html = md.render(result.content);

console.log(result);

var temp=fs.createWriteStream('index.html')

temp.write(html)
temp.end();
