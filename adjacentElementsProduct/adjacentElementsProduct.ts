export function adjacentElementsProduct(inputArray: number[]): number {
    let count = 0;
    let highest = inputArray[0] * inputArray[1];
    let check = (a, b) => {
        return a * b;
    }
    while(count < inputArray.length){
        if(check(inputArray[count], inputArray[count + 1]) > highest){
            highest = check(inputArray[count], inputArray[count + 1])
        }
        count++;
    }
    return highest;
}

//console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));