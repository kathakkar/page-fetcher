arr = process.argv.slice(2);
const request = require('request');
const fs = require('fs')
//downloading file
request(arr[0], (error, response, body) => { 
  
  if(!error){
    //writing to fle
    fs.writeFile(arr[1], body, err => {
      if (err) {
        console.log(err)
        return
      }
      else{
        //checking file size
        fs.stat(arr[1], (err, fileStats) => {
          if (err) {
            console.log(err)
          } else {
            //file written successfully
             console.log(`Downloaded and saved ${fileStats.size} bytes to ${arr[1]}`);
          }
        });  
      }
    
    });

  } else {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  }
  
});



const content = 'Some content!'

