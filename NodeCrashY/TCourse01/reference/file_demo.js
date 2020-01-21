const fs = require("fs");
const path = require("path");

// Create floder
// fs.mkdir(path.join(__dirname, "/test"),(err) => {
//     if(err) throw err;
//     console.log("Floder created...");
// })

//delete floder
// fs.rmdir(path.resolve(__dirname,"test"), (err)=>{
//     if(err) throw err;
//     else{
//         console.log("成功删除文件夹test！");
//     }
// }) 

// read floder
// fs.readdir(path.resolve(__dirname), (err, files) => {
//     if(err) throw err;
//     else{
//         console.log(`显示当前文件夹下文件：${files}`);
//     }
// })

// file exist 
// note: exists already was abandoned on version 12. and it was instead of
// existsSync.
//  existsSync return a boolean.
// fs.exists(path.resolve(__dirname, "file_demo.js"), (exists)=> {
//     if(exists){
//         console.log("文件存在！");
//     } 
//     else{
//         console.log("文件不存在！");
//     }
// })
fs.existsSync(path.resolve(__dirname, "file_demo.js"))

// display file information
// fs.stat(path.resolve(__dirname,"file_demo.js"), (err, stats)=>{
//     if(err) throw err;
//     else{
//         console.log("显示当前文件信息：" + stats);
//     }
// })

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test/hello.txt'), "Hello world!!!", (err)=>{
//     if(err) throw err;
//     console.log("File written to...");
// }) 

// fs.writeFile(path.join(__dirname, "/test/hello.txt"), "I love node.js!!!", (err) =>{
//     if(err) throw err;
//     console.log("File written to...");
// })

/**
 * we can found the file was instead by the new text, it didn't append the end 
 * of file. If we want to achieve the function we must use the other function 
 * appendFile.  
 */

/**like this:
 * Append File
 */
//  fs.appendFile(path.join(__dirname, "/test/hello.txt"), "the new thing was added the end of the file!!!", 
//     (err) => {
//         if (err) throw err;
//         console.log("the content was added the end of file!!!");
//     }
//  )

/**
 * we must pay attention to the second parameter that it control the data display format. 
 * The result must be the row buffer,if we use it by default.
 */
//  Read File
//      By the default 
// fs.readFile(path.join(__dirname, "/test", "/hello.txt"), (err, data) => {
//     if (err) throw err;
//     console.log(data);
// })
//      Set the utf8

// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// console.log(__dirname);

// Rename File
// Note: path.parse support the relative path. 
// rename is equal to the function mv in the linux.
// fs.rename(path.join(__dirname, "/test", "example.txt"), path.join(__dirname, "/test/hello.txt"),
// (err) => {
//     if (err) throw err;
//     console.log(`the file name was changed and the name is : ${path.parse("./test/hello.txt").name}`)
// })

// remove File
// fs.unlink(path.resolve(__dirname,'test','hello.txt'), (err) => {
//     if(err){
//         throw err
//     }else{
//         console.log('删除成功！');
//     }
// })

