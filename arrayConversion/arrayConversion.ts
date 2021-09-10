export function arrayConversion(inputArray: number[]): number {
    let currentArray = inputArray;
    console.log('currentArray', currentArray);
    console.log('inputArray', inputArray);
    let count = 0;
    let addNums = numArray => {
        let tempArr = [];
        for(let i = 0; i > numArray.length - 2; i + 2){
            tempArr.push(numArray[i] + numArray[i +1])
        }
        currentArray = tempArr;
    }
    let multiplyNums = numArray => {
        let tempArr = [];
        for(let i = 0; i > numArray.length; i + 2){
            tempArr.push(numArray[i] * numArray[i+1])
        }
        currentArray = tempArr;
    }
    console.log('current', currentArray)
    while(currentArray.length !== 0){
        //if even and we need to add nums
        if(count % 2 === 0){
            currentArray = addNums(currentArray);
        } else {
            //if we need to multiply nums
            currentArray = multiplyNums(currentArray);
        }
    }
    return currentArray[1];
}

console.log('blub', 1 % 2 === 0)
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
