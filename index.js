const readline = require('readline-sync')

// let number = 2;

// console.log("You have " + number + " brain cells"); // 2 strings

// console.log(`You have ${number} brain cells`); // 1 string






//get the text

"Publication Date,Title,Authors"
"\n29/07/1954,Lord of the Rings,John Ronald Reuel Tolkien"
"\n01/08/1996,A Game of Thrones,George Raymond Martin"
"\n21/06/2003,Harry Potter and the Order of the Phoenix,Joanne Rowling"

//each line will be `${date formatting} | text with ${truncation rule} | text with ${truncation rule} |`
//truncation rule = 


////////////////////////
//PROMGRAMME STARTS//
//////////////////////

console.log(`Choose your column width (recommend between 30 and 50:`)
const userWidthInput = readline.prompt();
const width = +userWidthInput


//function to set length of string, replace excess letter with ... and fill deficient strings with spaces
let titleString = "Lord of the Rings";
let titleStringWidth = width
//console.log(titleString.length);
function setTitleString (){
    if (titleString.length > titleStringWidth){
        return `${titleString.substring(0,(titleStringWidth-3))}...`;
    } else if (titleString.length < titleStringWidth){
        return `${" ".repeat(titleStringWidth - titleString.length)} ${titleString.substring(0, titleStringWidth)}`;
    } else {
        return `${titleString.substring(0, titleStringWidth)}`
    }
    
}
//console.log(setTitleString())


let authorString = "John Ronald Reuel Tolkien";
let authorStringWidth = width - 10
//console.log(authorString.length);
function setAuthorString (){
    if (authorString.length > authorStringWidth){
        return `${authorString.substring(0,(authorStringWidth - 3))}...`;
    } else if (authorString.length < authorStringWidth){
        return `${" ".repeat(authorStringWidth - authorString.length)} ${authorString.substring(0, authorStringWidth)}`;
    } else {
        return `${authorString.substring(0, authorStringWidth)}`
    }
    
}
//console.log(setAuthorString())







console.log(`| ${setTitleString()} | ${setAuthorString()} |`)