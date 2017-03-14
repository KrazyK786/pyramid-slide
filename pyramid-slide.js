
/**
 * Pyramid Slide
 *
 * Renders, in the HTML document, a Mario pyramid with adjustable bricks and height slider
 */
function drawPyramid() {
    //grab height input and turn into int
    var heightElem = document.getElementById("height");
    var heightStr = heightElem.value;
    var height = parseInt(heightStr);

    //create element to display height to user
    var ht = document.getElementById("display-height");

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";
    ht.innerHTML = "";

    ht.innerHTML = height;

    //pull back "material" selection for pyramid material
    var build_object = document.getElementById("material").value;

    // for loop to build each row of the pyramid
    for (var row = 0; row < height; row++) {


        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += build_object;
        }

        // make a <p> element for this row, and insert it into the build_objectpyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
