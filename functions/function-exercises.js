function makeLine(size, char = "#"){
    let hashLine = "";
    for (let i = 0; i < size; i++){
        hashLine+=char;
    }

    return hashLine;
}

// console.log(makeLine(5, "*"));

function makeSquare(size, char = "#"){
    let squareLine = [];
    for (let i = 0; i <= size-1; i++){
        squareLine.push(makeLine(size, char));
    }
    
    return squareLine.join("\n");
}

// console.log(makeSquare(5, "*"));

function makeRectangle(width, height, char = "#"){
    let rectangleLine = [];
    for (let i = 0; i < height; i ++){
        rectangleLine.push(makeLine(width, char));
    }    

    return rectangleLine.join("\n");
}

// console.log(makeRectangle(5,3, "*"));

function makeDownwardStairs(height, char = "#"){
    let downwardStairs = [];
    for (let i = 0; i <= height; i++){
        downwardStairs.push(makeLine(i, char));
    }

    return downwardStairs.join("\n");
}

// console.log(makeDownwardStairs(5, "*"));

function makeSpace(size){
    let spaceLine = "";
    for (let i = 0; i < size; i++){
        spaceLine+=" ";
    }

    return spaceLine;
}

function makeSpaceLine(numSpaces, numChars, char = "#"){
    let i = 0;
    let spaceLine = "";

    while (i < 2){
        if (i % 2 === 0){
            spaceLine += makeSpace(numSpaces);
        }else{
            spaceLine += makeLine(numChars, char);
        }

        i+=1;
    }

    return spaceLine;
}

// console.log(makeSpaceLine(3,5, "*"));

function makeIsoscelesTriangle(height, char = "#"){
    let triangle = [];
    for (let i = 0; i < height; i++){
        triangle.push(makeSpaceLine(height - i - 1, 2 * i + 1, char));
    }
    return triangle.join("\n");
}

// console.log(makeIsoscelesTriangle(5, "*"));

function makeReverseIsoscelesTriangle(height, char = "#"){

   return makeIsoscelesTriangle(height, char).split("\n").reverse().join("\n");
}

// console.log(makeReverseIsoscelesTriangle(5, "*"));

function makeDiamond(height, char = "#"){
    return makeIsoscelesTriangle(height, char) + "\n" + makeReverseIsoscelesTriangle(height, char);;
}

console.log(makeDiamond(5, "*"));