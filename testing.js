let str = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

/** What must be done: 
 * Loop through the characters of a given CSV string.
 * Store each “cell” of data in a variable.
 * When you encounter a comma, move to the next cell.
 * When you encounter the “\r\n” sequence, move to the next “row.”
 * Log each row of data.
 * 4 variables will be created (cell 1-4)
 */

// i realized i misunderstood what was to be done (i should really ask questions) and created arrays of each row when i should have created the cell variables which hold the information in each column. this is my backstep to see if i can fix that. 


function createNewCells(str) {
    let splitArr = str.split("\n")
    for(let i = 0; i <= splitArr.length-1; i++){
        let cells = splitArr[i].split(",");
        console.log(cells.join(" "))
    }
}

let cellsCreated = createNewCells(str)
console.log(cellsCreated)