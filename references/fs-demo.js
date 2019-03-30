const fs = require('fs');
const path = require('path');

// Create folder Commented out to prevent error from trying to create a created folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//   if(err) throw err;
//   console.log('Folder created...');
// });

// Create and write to a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'),
  'Hello World!',
  err => {
    if(err) throw err;
    console.log('File written to...');
  }
);

// Create and append to a file
fs.appendFile(path.join(__dirname, '/test', 'hello.txt'),
  'This is the second bit of text',
  err => {
    if(err) throw err;
    console.log('File written to...');
  }
);

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'),
  'utf8',
  (err, data) => {
    if(err) throw err;
    console.log(data);
  }
);

// Rename a file
fs.rename(path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloworld.txt'),
  err => {
    if(err) throw err;
    console.log('File renamed...');
  }
);
