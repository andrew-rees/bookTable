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



//class of book
// class Book {
//     constructor (ref, published, title, author) {
//         this.ref = ref
//         this.published = published
//         this.title = title
//         this.author = author
//     }
// }
// var lotr = new Book ("lotr", "29/07/1954", "Lord of the Rings", "John Ronald Reuel Tolkien")
// var got = new Book ("got", "01/08/1996", "A Game of Thrones", "George Raymond Martin")
// var hp = new Book ("hp", "21/06/2003", "Harry Potter and the Order of the Phoenix", "Joanne Rowling")

// arrays of titles and authors
publishedArray = [];
titleArray = ["Lord of the Rings", "A Game of Thrones", "Harry Potter and the Order of the Phoenix"];
authorArray = ["John Ronald Reuel Tolkien", "George Raymond Martin", "Joanne Rowling"];

// console.log("titleArray0 = " + titleArray[0] + " and authorArray0 = " + authorArray[0]);
// console.log("titleArray1 = " + titleArray[1] + " and authorArray1 = " + authorArray[1]);
// console.log("titleArray2 = " + titleArray[2] + " and authorArray2 = " + authorArray[2]);


if (i = 0, i > 3, i++) {

    //function to set Title column width, add spaces to start or ... to end if string.length <> width
    let titleString = titleArray[i];
    //console.log(titleString.length);
    function setTitleString() {
        if (titleString.length > 30) {
            return `${titleString.substring(0,(30-3))}...`;
        } else if (titleString.length < 30) {
            return `${" ".repeat(30 - titleString.length)} ${titleString.substring(0, 30)}`;
        } else {
            return `${titleString.substring(0, 30)}`
        }

    }
    //console.log(setTitleString())

    //function to set Author column width, add spaces to start or ... to end if string.length <> width
    let authorString = authorArray[i];
    //console.log(authorString.length);
    function setAuthorString() {
        if (authorString.length > 20) {
            return `${authorString.substring(0,(20 - 3))}...`;
        } else if (authorString.length < 20) {
            return `${" ".repeat(20 - authorString.length)} ${authorString.substring(0, 20)}`;
        } else {
            return `${authorString.substring(0, 20)}`
        }

    }
    //console.log(setAuthorString())

    //output
    console.log(`| ${setTitleString()} | ${setAuthorString()} |`)

}