'use strict'
var fs = require('fs');

var pwd = function(){
  return process.cwd();
}

var date = function(){
  var currDate = new Date();
  return currDate.toString();
}

var ls = function(){
  return fs.readdirSync('.').join('\n');
}

var echo = function(arg){
  if (arg === '$PATH'){
    return process.env.PATH;
  } else {
    return arg;
  }
}

module.exports = {

  pwd : pwd,
  date : date,
  ls : ls,
  echo: echo,
  cat: function(temp){
    console.log('here')
    var path = process.cwd() + '/' + temp
    console.log("path", path);
    console.log("typeof", typeof path);
    fs.readFile(path, 'utf8',(err, data) => {
      // if (err){
      //   console.log("error", err);
      //   return err;
      // }
      console.log("data", data);
      return data.toString();
    })

     return "hello"
  }
}
