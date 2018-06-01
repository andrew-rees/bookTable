const readline = require('readline-sync')

////////////////////////
//PROMGRAMME STARTS//
//////////////////////

// arrays of titles and authors
publishedArray = ["29/07/1954", "01/08/1996", "21/06/2003"];
titleArray = ["Lord of the Rings", "A Game of Thrones", "Harry Potter and the Order of the Phoenix"];
authorArray = ["John Ronald Reuel Tolkien", "George Raymond Martin", "Joanne Rowling"];


//function to set Title column width, add spaces to start or ... to end if string.length <> width
let titleString = ""
function setTitleString() {
        if (titleString.length > 30) {
            return `${titleString.substring(0,(30 - 3))}...`;
        } else if (titleString.length < 30) {
            return `${" ".repeat(30 - (titleString.length + 1))} ${titleString.substring(0, 30)}`;
        } else {
            return `${titleString.substring(0, 30)}`
        }

    }

//function to set Author column width, add spaces to start or ... to end if string.length <> width
let authorString = ""
function setAuthorString() {
        if (authorString.length > 20) {
            return `${authorString.substring(0,(20 - 3))}...`;
        } else if (authorString.length < 20) {
            return `${" ".repeat(20 - authorString.length)} ${authorString.substring(0, 20)}`;
        } else {
            return `${authorString.substring(0, 20)}`
        }

    }
///////////
//output//
//////////

console.log(`| Pub Date   |                           Title |              Authors |`)

for (i = 0; i < 3; i++) {
    titleString = titleArray[i];
    authorString = authorArray[i];
    //output
    console.log(`| ${publishedArray[i]} | ${setTitleString()} | ${setAuthorString()} |`)

}







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