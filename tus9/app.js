let fs = require('fs');
// let readf = fs.readFileSync('readMe.txt', 'utf8');
// console.log(readf);

// fs.writeFileSync('writeMe.txt', readf);

// fs.unlink('file_name'); de xoa file;
// fs.mkdirSync('file_name'); de tao folder
// fs.rmdirSync('file_name'); de xoa folder
// fs.mkdir('stuff', function(){
//   fs.readFile('readMe.txt', 'utf8', function(err, data){
//     fs.writeFile('./stuff/writeMe.txt', data);
//   });
// });
fs.unlink('./stuff/writeMe.txt', function(){
  fs.rmdir('stuff');
});
