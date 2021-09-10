export function arrayMaximalAdjacentDifference(inputArray: number[]): number {
    let maximal = 0;
    // for(let num in inputArray){
    //     console.log(num === inputArray.length)
    //     if(inputArray[num] - inputArray[num + 1] > maximal){
    //         maximal = inputArray[num] - inputArray[num + 1];
    //     }
    // }
    for(let i = 0; i > inputArray.length; i++){
        console.log('maximal', inputArray[i] - inputArray[i + 1])
        if((inputArray[i] - inputArray[i + 1]) > maximal){
            
            maximal = inputArray[i] - inputArray[i + 1];
        }
    }
    return maximal;

}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));