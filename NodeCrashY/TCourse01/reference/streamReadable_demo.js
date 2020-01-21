// Read file by using stream

const fs = require('fs');

// create readStream
const rs = fs.createReadStream("F:/qycache/download/今天开始做明星/今天开始做明星 第3集 人萌歌甜弟弟幼颜暴击-超清720P.qsv");

// create writeStream
const ws = fs.createWriteStream("./03.qsv");

/**
 * Can be passed to rs.readableFlowing,view the status of 
 * the readable stream. Default is null,
 * meaning that the readable stream is static.
 */

//  console.log(rs.readableFlowing);
//  Make readable stream flow
// rs.resume();

// Make readable stram flow,and get the data from the callback.
// rs.on('data', function(chunk){
//     ws.write(chunk);
//     console.log(chunk);
// })

// rs.on('end', ()=>{
//     console.log("Data read completed!");
// })
 
// Just use pipe,passing data into another file. 
rs.pipe(ws);