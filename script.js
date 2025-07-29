//install npm first

//First we learn about file system
const fs=require('fs'); //This import fs module for us

//Refer nodejs official documentation

//1.Write in file

fs.writeFile("new.txt","Hello ! I am learning nodejs",function(err){
    if(err) console.error(err);
    else    console.log("Done");
})

//2.Append in file

fs.appendFile("new.txt","Hello ! I am trying to learn...Hope I will successful",function(err){
    if(err) console.error(err);
    else    console.log("Done");
})

//3.rename file

fs.rename("new.txt","myfile.txt",function(err){
    if(err)  console.error(err);
    else     console.log("Done");
})

//4.copy file

fs.copyFile("myfile.txt","./copy/new.txt",function(err){
    if(err)  console.log(err.message);
    else     console.log("Done");
})

//5.unlink-->remove file
fs.unlink("./copy/new.txt",function(err){
    if(err)  console.error(err);
    else     console.log("Done");
})

//6.rmdir-->remove empty directory
fs.rmdir("./copy",function(err){
    if(err)  console.error(err);
    else     console.log("Done");
})

//7.rm--->remove non empty directory
fs.rm("./copy",{recursive : true},function(err){
    if(err)  console.log(err.message);
    else     console.log("Done");
})

//8.mkdir
fs.mkdir("./copy",function(err){
    if(err)  console.error(err);
    else     console.log("Done");
})

//9.readFile
fs.readFile("myFile.txt",function(err,data){
    if(err)   console.error(err);
    else      console.log(data);
})//Return raw buffered data if option not mention

//10.readfile with option
fs.readFile("myFile.txt",'utf8',function(err,data){
    if(err)   console.error(err);
    else      console.log(data);
})//write utf8 it returns string (characters)

//11.








