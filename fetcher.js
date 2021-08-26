arr = process.argv.slice(2);
const request = require('request');
const fs = require('fs')

const writeToFile = function (filename,body,error){

  if(!error){
        //writing to fle
        fs.writeFile(filename, body, err => {
          if (err) {
            console.log(err)
            return
          }
          else{
            //checking file size
            fs.stat(filename, (err, fileStats) => {
              if (err) {
                console.log(err)
              } else {
                //file written successfully
                 console.log(`Downloaded and saved ${fileStats.size} bytes to ${filename}`);
              }
            });  
          }
        
        });
    
      } else {
        console.log('error:', error); // Print the error if one occurred
      }

}


const newFun = function (url,filename,callback){
  //downloading file
  request(url, (error, response, body) => { 
    callback(filename,body,error);
  });
}

newFun(arr[0],arr[1],writeToFile);