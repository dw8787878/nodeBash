var commands = require('./command.js');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data){

  var data = data.toString().trim().split(/\s+/);
  var cmd = data[0]; // remove the newline
  var arg = data.slice(1).join(' ');

  var result = commands[cmd](arg);

  if (result != undefined){
    process.stdout.write(result);
  }

    process.stdout.write('\nprompt > ');

})
