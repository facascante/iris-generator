var program = require('commander');
var mkdirp = require('mkdirp');
var prompt = require("prompt");

var pkg = require('../package.json');

var version = pkg.version;

program
  .version(version)
  .usage('[options] [dir]')
  .option('    --port <port>', '')
  .option('    --dbhost <dbhost>', '')
  .option('    --dbport <dbport>', '')
  .option('    --dbname <dbname>', '')
  .option('    --filesize <filesize>', '')
  .option('    --sitepath <sitepath>', '')
  .parse(process.argv);
  
var options = {};
options.port = program.port;
options.dbhost = program.dbhost;
options.dbport = program.dbport;
options.dbname = program.dbname;
options.filesize = program.filesize;
options.sitepath = program.sitepath;

console.log(options);
if(options == {}){
    
}