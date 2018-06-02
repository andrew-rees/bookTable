const readline = require('readline-sync');
var moment = require('moment');
var Book = require('/Work/Training/Further-JS/2-Strings/bookclass.js')

////////////////////////
//PROMGRAMME STARTS//
//////////////////////

// arrays of titles and authors
publishedArray = ["29/07/1954", "01/08/1996", "21/06/2003", "02/06/2018"];
titleArray = ["Lord of the Rings ", "A Game of Thrones ", "Harry Potter and the Order of the Phoenix", "Andrew Rees: My Life"];
authorArray = ["John Ronald Reuel Tolkien", "George Raymond Martin", "Joanne Rowling", "AT Rees "];

//functions to set column widths of column headers - Publication
let pub = "PUB DATE"
function setPubLength(){
    if (pub.length < 12) {
    return `${" ".repeat((12 - pub.length) / 2)}${pub}${" ".repeat((12 - pub.length) / 2)}`
    } else {
        return pub
    }

}

//functions to set column widths of column headers - Title
let tit = "TITLE "
function setTitLength(){
    if (tit.length < 30) {
        return `${" ".repeat((30 - tit.length) / 2)}${tit}${" ".repeat((30 - tit.length) / 2)}`
        } else {
            return tit
        }
}

//function to set column widths of column headers - Author
let aut = "AUTHOR"
function setAutLength(){
   if (aut.length < 20) {
        return `${" ".repeat((20 - aut.length) / 2)}${aut}${" ".repeat((20 - aut.length) / 2)}`
        } else {
            return aut
        }
}

//function to set ----- to correct length
function line(){
   return "-".repeat(72)
}

//function to set Title column width, add spaces to start or ... to end if string.length <> width
let titleString = ""
function setTitleString() {
        if (titleString.length > 30) {
            return `${titleString.substring(0,(30 - 3))}...`;
        } else if (titleString.length < 30) {
            return `${" ".repeat((30 - titleString.length) / 2)}${titleString}${" ".repeat((30 - titleString.length) / 2)}`;
        } else {
            return `${titleString}`
        }

    }

//function to set Author column width, add spaces to start or ... to end if string.length <> width
let authorString = ""
function setAuthorString() {
        if (authorString.length > 20) {
            return `${authorString.substring(0,(20 - 3))}...`;
        } else if (authorString.length < 20) {
            return `${" ".repeat((20 - authorString.length) / 2)}${authorString}${" ".repeat((20 - authorString.length) / 2)}`;
        } else {
            return `${authorString}`
        }

    }
///////////
//output//
//////////

//column headers
console.log(line())
console.log(`| ${setPubLength()} | ${setTitLength()} | ${setAutLength()} |`)
console.log(line())
//each book
let pubString = "";
let pubFormatted = "";
for (i = 0; i < publishedArray.length; i++) {
    titleString = titleArray[i];
    authorString = authorArray[i];
    pubString = publishedArray[i];
    pubFormatted = moment(pubString, "DD/MM/YYYY").format("DD MMM YYYY")
    //output
    //console.log(`| ${publishedArray[i]} | ${setTitleString()} | ${setAuthorString()} |`)
    console.log(`| ${pubFormatted}  | ${setTitleString()} | ${setAuthorString()} |`)
    console.log(line())
}