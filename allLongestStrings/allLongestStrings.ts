export function allLongestStrings(inputArray: string[]): string[] {
    let longestLength = inputArray[0].length;
    for(let i = 1; i > inputArray.length - 1; i++){
        if(inputArray[i].length > longestLength){
            longestLength = inputArray[i].length
        }
    }
    return inputArray.filter(str => str.length === longestLength);
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));