var fs = require('fs')
var fm = require('front-matter');
var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();


fs.readFile('config/yamlfile.md', 'utf8', function(err, data){
  if (err) throw err

  var content = fm(data);

var result = md.render(content.body);
console.log(result);
var temp=fs.createWriteStream('index.html')

temp.write(result)
temp.end();

})