// 1 read the files (JSON)
// 2 transform JSON to CSV format
// 3 save as CSV format

fs = require('fs')
const path = require(`path`)
console.log(__dirname) // it's printed the current folder path
console.log(__filename) // it's printed the current file path
console.log(process.cwd()) // it's printed the CWD current working diructory - where the node process is started
console.log(path.resolve("../","../","Downloads")) // java is for javascript like car for the carpet
fs.readFile(__dirname+'/todos.json', 'utf8', function (err, data) { // read file with 3 paramiters - callback style
    if (err) {
        return console.log(err);
    }
    const jsondata = JSON.parse(data) // the step number 2 - transform the data into JSON form, because it is a string.
    //console.log(jsondata);
    let dataincsv = "UserId, ID, Title, Completed\n\r"
    jsondata.map(todo => {
        dataincsv += `${todo.userId},${todo.id},${todo.title},${todo.completed}\n`
        //console.log(todo)
    })
    //console.log(dataincsv)


    fs.writeFile(__dirname+'/allTodos.csv', dataincsv, 'utf8', function (err) { //step number 3 
        // we wrote "__dirname" instaed of the path to make it relativ to the index.js
        if (err) {
            console.log('Some error occured - file either not saved or corrupted file saved.');
        } else {
            console.log('It\'s saved!'); // the first file is done

        }
    });

    // filter the data in csv file
    let dataincsv2 ="UserId, ID, Title, Completed\n\r"  
    jsondata.map(todo => {
        if(!todo.completed){
        dataincsv2 += `${todo.userId},${todo.id},${todo.title},${todo.completed}\n`
        }
    })
    fs.writeFile(__dirname+'/openTodos.csv', dataincsv2, 'utf8', function (err) { 
        if (err) {
            console.log('Some error occured - file either not saved or corrupted file saved.');
        } else {
            console.log('It\'s saved!');

        }
    });
});