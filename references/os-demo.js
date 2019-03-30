const os = require('os');

// Platform
console.log(os.platform());

// CPU arch
console.log(os.arch());

// CPU core info
console.log(os.cpus());

var cores = os.cpus();
var len = cores.length;
var total = 0;

for(i = 0; i < len; i++){
  console.log(cores[i].speed);
  total += cores[i].speed;
}

mean = total / len;
console.log(mean);

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home dir
console.log(os.homedir());

// Uptime
console.log(os.uptime()/(60*60));
